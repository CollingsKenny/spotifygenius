import React from 'react';
import { v4 as uuid } from 'uuid';
import { stateKey } from '../config';
import styled from '@emotion/styled';
import facepaint from 'facepaint'

import { Icon, InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-heroicons-outline/code';
import spotifyIcon from '@iconify/icons-la/spotify';


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
  const mq = facepaint([
    '@media(min-width: 576px)',
    '@media(min-width: 768px)',
    '@media(min-width: 992px)',
    '@media(min-width: 1120px)'
  ])

  const Button = styled.div`
  padding: 0 0.5rem;
  border-bottom: 3px solid white;
  color: white;
  font-weight: bold;
  font-size: 36px;
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;

  const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #222;`;

  const Info = styled.section`
  display: flex;
  flex-grow: 2;
  justify-content: center;
  padding: 8rem 3rem 0;`;

  const Anchor = styled.a`
  position: absolute;
  top: 90%;
  left: 40%;
  z-index: 10;
  text-decoration: none;`;

  const Title = styled.h1`
  margin: 0 auto;
  padding-top: 2rem;
  font-weight: bold;
  font-size: 95px;
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;
  
  const Subtitle = styled.h3`
  margin: 0 auto;
  padding: 1rem 2rem;
  font-weight: bold;
  font-size: 48px;
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.015em;
  text-align: center;`;
  
  const Titles = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  color: white;
  text-align: center;`

  const Icons = styled.article`
  display: flex;
  flex-grow: 1;
  align-items: center;
  color: white;`;

  const IconSubtitle = styled.h3`
  font-weight: bold;
  font-size: 56px;
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;`;

  const Hills = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;`;

  const HillContainer = styled.div`
  flex: 1;
  z-index: 1;`;


  return (
    <Frame>
      <Info>
        <Titles>
          <Title>Spotify Genius</Title>
          <Subtitle>Learn More About How You Listen To Music</Subtitle>
        </Titles>
        <Icons>
          <Icon width="220" height="170" icon={spotifyIcon} />
          <IconSubtitle>+</IconSubtitle>
          <Icon width="220" height="170" icon={codeIcon} />
        </Icons>
      </Info>
      <Hills>
        <Anchor href={authorize()}>
          <Button>Get Started</Button>
        </Anchor>
        <HillContainer>
          <svg width="1440" height="324" viewBox="0 0 1440 324" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 284.319L50.8517 279.726C62.535 275.133 87.07 265.946 111.605 252.166C136.14 238.386 160.675 220.012 185.21 197.046C209.745 174.079 234.28 146.519 258.815 155.705C284.518 164.892 309.053 210.826 333.588 215.419C358.123 220.012 382.658 183.266 407.193 164.892C431.728 146.519 456.263 146.519 480.798 169.485C505.333 192.452 529.868 238.386 554.403 256.759C578.938 275.133 603.473 265.946 628.008 242.979C652.543 220.012 677.078 183.266 701.613 160.299C726.148 137.332 751.852 128.145 776.387 123.552C800.922 118.959 825.457 118.959 849.992 137.332C874.527 155.705 899.062 192.452 923.597 187.859C948.132 183.266 972.667 137.332 997.202 137.332C1021.74 137.332 1046.27 183.266 1070.81 215.419C1095.34 247.573 1119.88 265.946 1144.41 256.759C1168.95 247.573 1193.48 210.826 1219.18 224.606C1243.72 238.386 1268.26 302.693 1292.79 298.1C1317.32 293.506 1341.86 220.012 1366.39 192.452C1390.93 164.892 1415.46 183.266 1427.15 192.452L1440 201.639V367H1427.15C1415.46 367 1390.93 367 1366.39 367C1341.86 367 1317.32 367 1292.79 367C1268.26 367 1243.72 367 1219.18 367C1193.48 367 1168.95 367 1144.41 367C1119.88 367 1095.34 367 1070.81 367C1046.27 367 1021.74 367 997.202 367C972.667 367 948.132 367 923.597 367C899.062 367 874.527 367 849.992 367C825.457 367 800.922 367 776.387 367C751.852 367 726.148 367 701.613 367C677.078 367 652.543 367 628.008 367C603.473 367 578.938 367 554.403 367C529.868 367 505.333 367 480.798 367C456.263 367 431.728 367 407.193 367C382.658 367 358.123 367 333.588 367C309.053 367 284.518 367 258.815 367C234.28 367 209.745 367 185.21 367C160.675 367 136.14 367 111.605 367C87.07 367 62.535 367 50.8517 367H38V284.319Z" fill="#EFFC56" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 152.247L18.625 119.385C38.4917 86.524 76.9833 20.8011 114.233 4.37035C152.725 -12.0604 191.217 20.8011 229.708 53.6625C266.958 86.524 305.45 119.385 343.942 144.032C382.433 168.678 419.683 185.108 458.175 168.678C496.667 152.247 535.158 102.955 573.65 86.524C610.9 70.0933 649.392 86.524 687.883 135.816C726.375 185.108 763.625 267.262 802.117 300.123C840.608 332.985 879.1 316.554 916.35 300.123C954.842 283.693 993.333 267.262 1031.82 267.262C1070.32 267.262 1107.57 283.693 1146.06 250.831C1184.55 217.97 1223.04 135.816 1260.29 127.601C1298.78 119.385 1337.28 185.108 1375.77 201.539C1413.02 217.97 1451.51 185.108 1471.38 168.678L1490 152.247V448H1471.38C1451.51 448 1413.02 448 1375.77 448C1337.28 448 1298.78 448 1260.29 448C1223.04 448 1184.55 448 1146.06 448C1107.57 448 1070.32 448 1031.82 448C993.333 448 954.842 448 916.35 448C879.1 448 840.608 448 802.117 448C763.625 448 726.375 448 687.883 448C649.392 448 610.9 448 573.65 448C535.158 448 496.667 448 458.175 448C419.683 448 382.433 448 343.942 448C305.45 448 266.958 448 229.708 448C191.217 448 152.725 448 114.233 448C76.9833 448 38.4917 448 18.625 448H0V152.247Z" fill="#0E8739" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-67 353.793L-25.5575 300.724C17.1408 247.655 100.026 141.517 184.167 123.827C268.307 106.137 351.193 176.896 435.333 185.741C519.474 194.586 602.359 141.517 686.5 150.362C770.641 159.206 853.526 229.965 937.667 274.189C1021.81 318.414 1104.69 336.103 1188.83 309.569C1272.97 283.034 1355.86 212.275 1398.56 176.896L1440 141.517V513H1398.56C1355.86 513 1272.97 513 1188.83 513C1104.69 513 1021.81 513 937.667 513C853.526 513 770.641 513 686.5 513C602.359 513 519.474 513 435.333 513C351.193 513 268.307 513 184.167 513C100.026 513 17.1408 513 -25.5575 513H-67V353.793Z" fill="#3FC46E" />
          </svg>
        </HillContainer>
      </Hills>
    </Frame>
  );
};
