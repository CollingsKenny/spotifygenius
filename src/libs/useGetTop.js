import { useReducer, useEffect } from 'react';
import axios from 'axios';

import { ACTIONS, reducer } from './reducer';

const ENDPOINT = 'https://api.spotify.com/v1/me/top';

export const TOP_PATHS = {
  ARTISTS: 'artists',
  TRACKS: 'tracks',
};

export default function useGetTop(type, accessToken) {
  const [state, dispatch] = useReducer(reducer, { user: null, loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(`${ENDPOINT}/${type}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { data: data.items } });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      });
  }, [type, accessToken]);

  return state;
}
