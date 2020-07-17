import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Ul = styled.ul`
  padding:0 2rem;
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
