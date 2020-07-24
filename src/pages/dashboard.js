import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Redirect } from '@reach/router';
import { Icon } from '@iconify/react';

import { accessKey } from '../config';
import Top from '../dashboard/top';

import useGetProfile from '../libs/useGetProfile';

import heartIcon from '@iconify/icons-heroicons-outline/heart';
import chartSquareBar from '@iconify/icons-heroicons-outline/chart-square-bar';
import fireIcon from '@iconify/icons-heroicons-outline/fire';
import newspaperIcon from '@iconify/icons-heroicons-outline/newspaper';
import emojiHappy from '@iconify/icons-heroicons-outline/emoji-happy';
import userIcon from '@iconify/icons-heroicons-outline/user';
import cogIcon from '@iconify/icons-heroicons-outline/cog';
import colors from '../libs/colors';

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 900px;
  background: ${colors.dark0};
`;

const Frame = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: auto;
  margin: 2rem 4rem;
  border-radius: 50px;
  background: #3a3a3a;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Nav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  height: auto;
  border-radius: 50px 0 0 50px;
  background: #1db954;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.25);
`;

const NavItem = styled.div`
  margin: 1rem 1rem;
`;

const ProfilePic = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 259.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

const NavDivider = styled.div`
  width: 135px;
  border: 1px solid #3a3a3a;
`;

const NavItemIcon = ({ icon }) => {
  return (
    <>
      <NavItem>
        <Icon width='35' height='40' color='#3A3A3A' icon={icon} />
      </NavItem>
      <NavDivider />
    </>
  );
};

const DashPage = styled.div`
  width: 100%;
  height: 100%;
`;

function Test() {
  const accessToken = localStorage[accessKey];
  const profile = useGetProfile(accessToken);

  const [dashPageIndex, setDashPageIndex] = useState(0);

  if (profile.loading) {
    return <p>Loading!</p>;
  }
  if (profile.error) {
    return <Redirect to='/' />;
  } else {
    return (
      <Container>
        <Frame>
          <Nav>
            <NavItem>
              {profile.data.images.length > 1 && (
                <ProfilePic
                  src={profile.data.images[0].url}
                  alt={profile.data.display_name}
                ></ProfilePic>
              )}
            </NavItem>
            <NavDivider />
            <NavItemIcon icon={heartIcon} />
            <NavItemIcon icon={chartSquareBar} />
            <NavItemIcon icon={fireIcon} />
            <NavItemIcon icon={newspaperIcon} />
            <NavItemIcon icon={emojiHappy} />
            <NavItemIcon icon={userIcon} />
            <NavItemIcon icon={cogIcon} />
          </Nav>
          <DashPage>{dashPageIndex === 0 && <Top />}</DashPage>
        </Frame>
      </Container>
    );
  }
}

export default Test;
