import React from 'react';
import styled from '@emotion/styled';

import { accessKey } from '../config';
import useGetTop, { TOP_PATHS } from '../libs/useGetTop';

import ArtistList from '../containers/artistList';
import SongList from '../containers/songList';
import FilterGroup from '../containers/filterGroup';

const Container = styled.div`
  padding: 1rem 4rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 410px;
  max-height: 680px;
  border-radius: 50px;
  background: #222222;
  text-align: left;
`;

const Title = styled.h2`
  padding: 1rem 2rem 0;
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
  font-family: Work Sans, -apple-system, BlinkMacSystemFont, sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.8em;
  padding: 1rem 0;
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
`;

const Top = () => {
  const accessToken = localStorage[accessKey];
  const topTracks = useGetTop(TOP_PATHS.TRACKS, accessToken);
  const topArtists = useGetTop(TOP_PATHS.ARTISTS, accessToken);

  return (
    <Container>
      <Title>Top Artists & Songs This Month</Title>
      <ContentContainer>
        <Card>
          <Title>Artists</Title>
          <ScrollContainer>
            <ArtistList artists={topArtists} />
          </ScrollContainer>
        </Card>
        <FilterGroup />
        <Card>
          <Title>Tracks</Title>
          <ScrollContainer>
            <SongList tracks={topTracks} />
          </ScrollContainer>
        </Card>
      </ContentContainer>
    </Container>
  );
};

export default Top;
