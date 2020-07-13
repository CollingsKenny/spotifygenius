import React from 'react';
import { v4 as uuid } from 'uuid';
import { stateKey } from '../config';

export default () => {
  const authorize = () => {
    const url = 'https://accounts.spotify.com/authorize';
    const clientId = 'c034101426734eb990996c5358c9a0b6';
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = ['user-read-recently-played'];

    const state = uuid();
    localStorage.setItem(stateKey, state);

    return `${url}?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Spotify Genius</h1>
      <a href={authorize()}>
        <button>Log in to Spotify</button>
      </a>
    </div>
  );
};
