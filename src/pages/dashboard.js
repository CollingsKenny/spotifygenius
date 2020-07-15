import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { accessKey } from '../config';

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

const HeaderText = styled.div`
  ${tw`
  text-3xl
  font-bold
  text-green-500

`}
`;

const Ul = styled.ul`
  ${tw`
  h-full list-disc ml-3
   `}
`;

const Li = styled.ul`
  ${tw`
  py-2 text-green-500
   `}
`;

const convertValenceToEmoji = (valence) => {
  if (valence < 0.1) return '😭';
  else if (valence < 0.2) return '😩';
  else if (valence < 0.3) return '☹️';
  else if (valence < 0.4) return '🙁';
  else if (valence < 0.5) return '😐';
  else if (valence < 0.6) return '🙂';
  else if (valence < 0.7) return '😀';
  else if (valence < 0.8) return '😄';
  else return '😁';
};

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
      getTracksFeatures(
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

  if (!tracksFeatures) {
    return <p>Loading!</p>;
  }
  return (
    <div class='bg-black'>
      <div class='flex justify-center'>
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
        <div>
          <HeaderText>Your Favorite Artists</HeaderText>
          <Ul>
            {userTaste.artists.map((item) => {
              if (item.name === 'Kanye West')
                return (
                  <Li>
                    Kanye West <span role='img'>🌊</span>
                  </Li>
                );
              return <Li>{item.name} </Li>;
            })}
          </Ul>
        </div>

        <div>
          <HeaderText>Your Favorite Songs</HeaderText>
          <Ul>
            {userTaste.tracks.map((item, index) => {
              return (
                <Li>
                  <span role='img'>
                    {convertValenceToEmoji(tracksFeatures[index].valence)}
                  </span>{' '}
                  {item.album.artists[0].name} - {item.name}{' '}
                </Li>
              );
            })}
          </Ul>
        </div>
      </Frame>
    </div>
  );
};
