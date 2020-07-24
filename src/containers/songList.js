import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
  padding: 0 2rem;
  list-style: disc;
  white-space: nowrap;
`;

const Li = styled.li`
  margin: 0.5rem 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  overflow-x: hidden;
`;

const SongList = ({ tracks }) => {
  return (
    <div>
      <Ul>
        {tracks.loading ? (
          <Li>Loading...</Li>
        ) : (
          tracks.data.map((track, index) => {
            return (
              <Li key={track.id}>
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
