import React from 'react';
import styled from '@emotion/styled';
import ArtistList from './artistList';
import SongList from './songList';
import colors from '../libs/colors';

const Card = styled.article`
  width: 410px;
  height: 485px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${colors.dark0};
  border-radius: 50px;
`;

const TasteTitle = styled.h2`
  font-family: Work Sans, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  padding: 1rem 2rem 0;
`;

const CardContent = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
`;

const TasteCard = ({ type, items, features }) => {
  return (
    <Card>
      <TasteTitle>{type}</TasteTitle>
      <CardContent>
        {type === 'Artists' ? (
          <ArtistList artists={items} />
        ) : (
          <SongList tracks={items} features={features} />
        )}
      </CardContent>
    </Card>
  );
};
export default TasteCard;
