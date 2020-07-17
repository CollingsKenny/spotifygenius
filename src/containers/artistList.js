import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Ul = styled.ul`
  padding:0 2rem;
  padding-bottom:0.5rem;
  overflow-y:scroll;
  list-style:disc;
  white-space:nowrap;
`;

const Li = styled.ul`
  margin:0.5rem 0;
  font-size:20px;
  font-weight:bold;
  color:#FFF;
  overflow-x:hidden;
`;

const ArtistList = ({ artists }) => {
  console.log(artists)
  return (
    <div>
      <Ul>
        {!artists ? (
          <Li>Loading...</Li>
        ) : (
            artists.map((artist) => {
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
    </div>
  );
};

export default ArtistList;
