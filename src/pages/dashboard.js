import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { accessKey } from '../config';

import SongList from '../containers/songList';
import ArtistList from '../containers/artistList';

const Frame = styled.div`
  ${tw`
    flex 
    mx-12
    py-10
    bg-black
    h-screen
    justify-around
  `}
`;

const TermButton = styled.div`
  ${tw`bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4 cursor-pointer`}
`;

export default () => {
  /* State */
  const key = localStorage[accessKey];
  const [userTaste, setUserTaste] = useState({ tracks: [], artists: [] });
  const [term, setTerm] = useState('medium');

  const [tracksFeatures, setTracksFeatures] = useState(null);

  const handleClick = (e) => {
    setTerm(e.target.id);
  };

  /* Calls Spotify Taste Endpoint */
  const getUserTaste = async (accessToken, tasteType) => {
    const res = await axios.get(
      `https://api.spotify.com/v1/me/top/${tasteType}?time_range=${term}_term&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    // console.log(res.data.items);
    // console.log(tasteType);
    setUserTaste((prevState) => ({
      ...prevState,
      [tasteType]: res.data.items,
    }));
    if (tasteType === 'tracks') {
      await getTracksFeatures(
        accessToken,
        res.data.items.map((track) => track.id)
      );
    }
  };

  const getTracksFeatures = async (accessToken, tracks) => {
    const res = await axios.get(
      `https://api.spotify.com/v1/audio-features?ids=${tracks}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res.data.audio_features);

    setTracksFeatures(res.data.audio_features);
  };

  React.useEffect(() => {
    getUserTaste(key, 'tracks');
    getUserTaste(key, 'artists');
  }, [term]);

  return (
    <div className='bg-black'>
      <div className='flex justify-center'>
        <TermButton id='long' onClick={handleClick}>
          All-Time
        </TermButton>
        <TermButton id='medium' onClick={handleClick}>
          This Year
        </TermButton>
        <TermButton id='short' onClick={handleClick}>
          This Month
        </TermButton>
      </div>

      <Frame>
        <ArtistList artists={userTaste.artists} />
        <SongList tracks={userTaste.tracks} features={tracksFeatures} />
      </Frame>
    </div>
  );
};
