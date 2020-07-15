import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { accessKey } from '../config';
import { render } from 'react-dom';

const MyComponent = styled.div`
  ${tw`bg-red-100
  rounded-lg
  border`}
  img {
    height: 265px;
    object-fit: cover;
    object-position: center;
  }
`;

const Frame = styled.div`
  ${tw`
    flex 
    mx-12
    py-10
    justify-around
  `}

`;

const HeaderText = styled.div`
${tw`
  text-3xl
  font-bold

`}`;

const ItemText = styled.div`
${tw`
  text-lg
  font-semibold
`}`;
const ListContainer = styled.div`
${tw`
  px-2
`}`;
export default () => {

  const key = 'BQC1cywahDxID4Za6iNf23nBzMNFwhXmL7wvtakcVqhd7jq2Ts5M5pj2cSgCLykno2sJgJHFVD4LR6jI86dQZQ34C0t1Jz6H-OOkHTimi3kAWFcbDWFs7xtwkVU319YaAlVdXO7X4iIxCU3qd8e4NqJy_XA'
  const [userTaste, setUserTaste] = useState({ tracks: [], artists: [] })

  React.useEffect(() => {
    const getUserTracks = async (accessToken) => {
      const res = await axios.get('https://api.spotify.com/v1/me/top/tracks',
        { headers: { "Authorization": `Bearer ${accessToken}` } })
      console.log(res.data.items)
      setUserTaste({ ...userTaste, tracks: res.data.items })
    }
    const getUserArtists = async (accessToken) => {
      const res = await axios.get('https://api.spotify.com/v1/me/top/artists',
        { headers: { "Authorization": `Bearer ${accessToken}` } })
      console.log(res.data.items)
      setUserTaste({ ...userTaste, artists: res.data.items })
    }
    getUserTracks(key);
    getUserArtists(key);
  }, []);

  return (
    <Frame>

      <div>
        <HeaderText>Your Favorite Artists</HeaderText>
        <ul className='h-full list-disc ml-3'>
          {userTaste.artists.map(item => {
            return <li className='py-2' key={item.id}>{item.name} </li>
          })}
        </ul>
      </div>

      <div>
        <HeaderText>Your Favorite Songs</HeaderText>
        <ul className='h-full list-disc ml-3'>
          {userTaste.tracks.map((item, index) => {
            return <li className='py-2' key={index}>{item.album.artists[0].name} - {item.name} </li>
          })}
        </ul>
      </div>


    </Frame>

  )
};
