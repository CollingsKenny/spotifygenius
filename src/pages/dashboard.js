import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify/icons-heroicons-outline/heart';


import { accessKey } from '../config';
import SongList from '../containers/songList';
import ArtistList from '../containers/artistList';
import FancyButton from '../components/fancyButton';


const Container = styled.main`
  display:flex;
  width:100%;
  height:900px;
  background:#222222;
`;
const DashboardFrame = styled.div`
  display:flex;
  width:100%;
  height:685px;
  margin: 2rem 4rem;
  background: #3A3A3A;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius:50px;
`;

const NavSidebar = styled.aside`
  display:flex;
  flex-direction:column; 
  align-items:center;
  width:135px;
  height:685px;
  background:#1DB954;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px 0px 50px;
`;
const SideBarDivider = styled.div`
  width:135px;
  border: 1px solid #3A3A3A;
`;

const IconContainer = styled.div`
  margin:1rem 1rem;
`;

const UserProfilePhoto = styled.div`
  width:53px;
  height:53px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 259.5px;
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
      <DashboardFrame>
        <NavSidebar>
          <IconContainer>
            <UserProfilePhoto src='https://res.cloudinary.com/dtu8zsq1c/image/upload/v1594601133/portfolio-assets/download20200700162348_b4rglf.png'></UserProfilePhoto>
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={heartIcon} />
          </IconContainer>
          <SideBarDivider />

        </NavSidebar>
      </DashboardFrame>
    </Container>
  );
};
