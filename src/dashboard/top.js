import React, { useState } from 'react';
import styled from '@emotion/styled';

import { accessKey } from '../config';
import useGetTop, { TOP_PATHS } from '../libs/useGetTop';

import ArtistList from '../containers/artistList';
import SongList from '../containers/songList';
import colors from '../libs/colors';

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
  background: ${colors.dark0};
  text-align: left;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  padding-top: 1rem;
  padding-left: 2rem;
  color: ${colors.light};

  font-weight: bold;
  font-size: 40px;
  font-family: Work Sans, -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Select = styled.select`
  display: inline-block;
  margin: 0;
  padding-top: 1rem;
  padding-left: 0;

  border: none;
  background: transparent;
  color: ${colors.light};
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
  const [params, setParams] = useState({ timeRange: 'short_term' });
  const topTracks = useGetTop(TOP_PATHS.TRACKS, params.timeRange, accessToken);
  const topArtists = useGetTop(
    TOP_PATHS.ARTISTS,
    params.timeRange,
    accessToken
  );

  const handleChange = (event) => {
    setParams({ [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Title>Top Artists & Songs</Title>{' '}
      <Select name='timeRange' value={params.timeRange} onChange={handleChange}>
        <option value='short_term'>This Month</option>
        <option value='medium_term'>This Year</option>
        <option value='long_term'>All Time</option>
      </Select>
      <ContentContainer>
        <Card>
          <Title>Artists</Title>
          <ScrollContainer>
            <ArtistList artists={topArtists} />
          </ScrollContainer>
        </Card>
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
