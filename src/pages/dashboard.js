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
    bg-black
    h-screen
    justify-around
  `}

`;

const TermButton = styled.div`
${tw`bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4 cursor-pointer`}`;

const HeaderText = styled.div`
${tw`
  text-3xl
  font-bold
  text-green-500

`}`;

export default () => {


  /* State */
  const key = 'BQDrlvEXL4deOnCQHtb6rUiMO2VFjlO7RPR3cRgcgX5p8CF4_01l15LazejXPXfgkHEC37R_DXd7Pf6aByMCsIlYJa0UVTthzPAqFGwPulwPSRMqGifsMxGw-nOmH7WfVPF5obDRehcI6gbZ7AKLXYkDtJM'
  const [userTaste, setUserTaste] = useState({ tracks: [], artists: [] })
  const [term, setTerm] = useState('medium')

  const handleClick = e => {
    setTerm(e.target.id)
  }

  /* Calls Spotify Taste Endpoint */
  const getUserTaste = async (accessToken, tasteType) => {
    const res = await axios.get(`https://api.spotify.com/v1/me/top/${tasteType}?time_range=${term}_term&limit=10`,
      { headers: { "Authorization": `Bearer ${accessToken}` } })
    console.log(res.data.items)
    console.log(tasteType)
    setUserTaste(prevState => ({ ...prevState, [tasteType]: res.data.items }))
  }

  React.useEffect(() => {
    getUserTaste(key, 'tracks');
    getUserTaste(key, 'artists');
  }, [term]);

  return (<div class='bg-black' >
    <div class="flex justify-center">
      <TermButton id='long' class="bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4 cursor-pointer" onClick={handleClick}>
        All-Time
      </TermButton>
      <TermButton id='medium' class="bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4 cursor-pointer" onClick={handleClick}>
        This Year
      </TermButton>
      <TermButton id='short' class="bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4 cursor-pointer" onClick={handleClick}>
        This Month
      </TermButton>
    </div>

    <Frame>
      <div>
        <HeaderText>Your Favorite Artists</HeaderText>
        <ul className='h-full list-disc ml-3'>
          {console.log(userTaste)}
          {userTaste.artists.map(item => {
            return <li className='py-2 text-green-500'>{item.name} </li>
          })}
        </ul>
      </div>

      <div>
        <HeaderText>Your Favorite Songs</HeaderText>
        <ul className='h-full list-disc ml-3'>
          {userTaste.tracks.map((item) => {
            return <li className='py-2 text-green-500' >{item.album.artists[0].name} - {item.name} </li>
          })}
        </ul>
      </div>


    </Frame>
  </div>

  )
};
