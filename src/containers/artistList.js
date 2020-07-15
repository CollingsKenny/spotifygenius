import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const HeaderText = styled.div`
  ${tw`
  text-3xl
  font-bold
  text-green-500

`}
`;

const Ul = styled.ul`
  ${tw`
  h-full list-disc ml-3
   `}
`;

const Li = styled.ul`
  ${tw`
  py-2 text-green-500
   `}
`;

const ArtistList = ({ artists }) => {
  return (
    <div>
      <HeaderText>Your Favorite Artists</HeaderText>

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
