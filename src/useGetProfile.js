import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get_data',
  ERROR: 'error',
};

const BASE_URL = 'https://api.spotify.com/v1/me';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, user: null };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, user: action.payload.user };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: null,
      };
    default:
      return state;
  }
}

export default function useGetProfile(accessToken) {
  const [state, dispatch] = useReducer(reducer, { user: null, loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log('res', res.data.display_name);
        dispatch({ type: ACTIONS.GET_DATA, payload: { user: res.data } });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      });
  }, [accessToken]);

  return state;
}
