import React, { useState } from 'react';
import axios from 'axios';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify/icons-heroicons-outline/heart';
import chartSquareBar from '@iconify/icons-heroicons-outline/chart-square-bar';
import fireIcon from '@iconify/icons-heroicons-outline/fire';
import newspaperIcon from '@iconify/icons-heroicons-outline/newspaper';
import emojiHappy from '@iconify/icons-heroicons-outline/emoji-happy';
import userIcon from '@iconify/icons-heroicons-outline/user';
import cogIcon from '@iconify/icons-heroicons-outline/cog';

import { accessKey } from '../config';
import TasteCard from '../containers/tasteCard';
import FilterGroup from '../containers/filterGroup';
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
  justify-content:start;
  width:100%;
  height:685px;
  margin: 2rem 4rem;
  background: #3A3A3A;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius:50px;
`;
const CategoryFrame = styled.section`
  display:flex;
  flex-direction:column;
  width:100%;

`;
const CategoryHeader = styled.div`
  height:87px;
  width:inherit;
  padding:0.5rem 2rem;
  text-align:left;
  border-bottom: 1px solid #656464;

`;
const CategoryTitle = styled.h2`
  font-family:Work Sans, -apple-system, BlinkMacSystemFont;
  font-weight:bold;
  font-size:48px;
  color: #FFF;
`;

const CategorySubTitle = styled.h2`
  font-family:Work Sans, -apple-system, BlinkMacSystemFont;
  font-weight:bold;
  font-size:36px;
  color: #FFF;
`;

const CategoryContentWrapper = styled.article`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  padding: 1rem 4rem;
  `;
const CategoryContentDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:1rem 0;

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

const UserProfilePhoto = styled.img`
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
            <Icon width="35" height="40" color="#3A3A3A" icon={chartSquareBar} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={fireIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={newspaperIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={emojiHappy} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={userIcon} />
          </IconContainer>
          <SideBarDivider />
          <IconContainer>
            <Icon width="35" height="40" color="#3A3A3A" icon={cogIcon} />
          </IconContainer>
          <h1>Settings</h1>
        </NavSidebar>
        <CategoryFrame>
          <CategoryHeader>
            <CategoryTitle>Favorites</CategoryTitle>
          </CategoryHeader>
          <CategoryContentWrapper>
            <CategorySubTitle>Your Favorite Artists & Songs This Month</CategorySubTitle>
            <CategoryContentDisplay>
              <TasteCard />
              <FilterGroup/>
              <TasteCard />
            </CategoryContentDisplay>
          </CategoryContentWrapper>
        </CategoryFrame>
      </DashboardFrame>
    </Container>
  );
};
