import React from 'react';
import { Redirect } from '@reach/router';
import { accessKey } from '../config';

const getHash = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
};

const isAuthStateValid = (state) => {
  return state !== localStorage.getItem('spotify_auth_state');
};

export default () => {
  const { access_token, state } = getHash();
  localStorage.setItem(accessKey, access_token);
  const isError = isAuthStateValid(state);

  if (isError) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>something went wrong!</h1>
      </div>
    );
  }

  return <Redirect to='/dashboard/' />;
};
