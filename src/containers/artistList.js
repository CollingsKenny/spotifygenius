import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
  padding: 0 2rem;
  padding-bottom: 0.5rem;
  list-style: disc;
  white-space: nowrap;
`;

const Li = styled.li`
  overflow-x: hidden;
  margin: 0.5rem 0;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

const ArtistList = ({ artists }) => {
  return (
    <Ul>
      {artists.loading ? (
        <Li>Loading...</Li>
      ) : !artists.data ? (
        <Li>Error</Li>
      ) : (
        artists.data.map((artist) => {
          if (artist.name === 'Kanye West')
            return (
              <Li key={artist.id}>
                Kanye West{' '}
                <span role='img' aria-label='Wavy'>
                  🌊
                </span>
              </Li>
            );
          return <Li key={artist.id}>{artist.name} </Li>;
        })
      )}
    </Ul>
  );
};

export default ArtistList;
