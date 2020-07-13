import React, { useState, useEffect } from 'react';
import { useNavigate } from '@reach/router';
import { stateKey } from '../config';

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

export default ({ navigate }) => {
  const [authInfo, setAuthInfo] = useState(getHash());
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let error = isAuthStateValid(authInfo.state);
    // if (!error) {
    //   useNavigate('blog');
    // }
  });

  if (isError) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>something went wrong!</h1>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>redirecting...</h1>
      {}
    </div>
  );
};
