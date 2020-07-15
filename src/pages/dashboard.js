import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { accessKey } from '../config';

import SongList from '../containers/songList';
import ArtistList from '../containers/artistList';
import FancyButton from '../components/fancyButton';

const Container = styled.div`
  ${tw`
    bg-black
  `}
`;
const TermNav = styled.nav`
  ${tw`
  flex justify-center
  `}
`;

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

export default () => {
  /* Calls Spotify Taste Endpoint */
  const getUserTaste = async (accessToken, tasteType) => {
    const {
      data: { items },
    } = await axios.get(
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
      [tasteType]: items,
    }));
    if (tasteType === 'tracks') {
      getTracksFeatures(
        accessToken,
        items.map((track) => track.id)
      );
    }
  };

  /* Calls Spotify Audio Features */
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

    setTracksFeatures(res.data.audio_features);
  };

  /* State */
  const key = localStorage[accessKey];
  const [userTaste, setUserTaste] = useState({ tracks: [], artists: [] });
  const [tracksFeatures, setTracksFeatures] = useState(null);
  const [term, setTerm] = useState('medium');

  const termClick = (e) => {
    setTerm(e.target.id);
  };

  React.useEffect(() => {
    getUserTaste(key, 'artists');
    getUserTaste(key, 'tracks');
  }, [term]);

  return (
    <Container>
      <TermNav>
        <FancyButton id='long' onClick={termClick} active={term === 'long'}>
          All-Time
        </FancyButton>
        <FancyButton id='medium' onClick={termClick} active={term === 'medium'}>
          This Year
        </FancyButton>
        <FancyButton id='short' onClick={termClick} active={term === 'short'}>
          This Month
        </FancyButton>
      </TermNav>

      <Frame>
        <ArtistList artists={userTaste.artists} />
        <SongList tracks={userTaste.tracks} features={tracksFeatures} />
      </Frame>
    </Container>
  );
};
