import React from 'react';
import { v4 as uuid } from 'uuid';
import { stateKey } from '../config';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

export default () => {
  const authorize = () => {
    const url = 'https://accounts.spotify.com/authorize';
    const clientId = 'c034101426734eb990996c5358c9a0b6';
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = ['user-read-recently-played', 'user-top-read'];

    const state = uuid();
    localStorage.setItem(stateKey, state);

    return `${url}?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
  };

  const Button = styled.div`
    ${tw`px-4 
    py-2
    bg-blue-100
    rounded-md
    shadow-md`}
  `;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Spotify Genius</h1>
      <a href={authorize()}>
        <Button>Log in to Spotify</Button>
      </a>
    </div>
  );
};
