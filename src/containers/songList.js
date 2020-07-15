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

const convertValenceToEmoji = (valence) => {
  if (valence < 0.1) return '😭';
  else if (valence < 0.2) return '😩';
  else if (valence < 0.3) return '☹️';
  else if (valence < 0.4) return '🙁';
  else if (valence < 0.5) return '😐';
  else if (valence < 0.6) return '🙂';
  else if (valence < 0.7) return '😀';
  else if (valence < 0.8) return '😄';
  else return '😁';
};

const SongList = ({ tracks, features }) => {
  return (
    <div>
      <HeaderText>Your Favorite Songs</HeaderText>
      <Ul>
        {!tracks || !features ? (
          <Li>Loading...</Li>
        ) : (
          tracks.map((track, index) => {
            return (
              <Li key={track.id}>
                <span role='img'>
                  {convertValenceToEmoji(features[index].valence)}
                </span>{' '}
                {track.album.artists[0].name} - {track.name}{' '}
              </Li>
            );
          })
        )}
      </Ul>
    </div>
  );
};

export default SongList;
