import { useReducer, useEffect } from 'react';
import axios from 'axios';

import { ACTIONS, reducer } from './reducer';

const ENDPOINT = 'https://api.spotify.com/v1/me';

export default function useGetProfile(accessToken) {
  const [state, dispatch] = useReducer(reducer, { user: null, loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { data } });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      });
  }, [accessToken]);

  return state;
}
