import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MyComponent = styled.div`
  ${tw`bg-red-100
  rounded-lg
  overflow-hidden
  border`}

  height: 409px;
  img {
    height: 265px;
    object-fit: cover;
    object-position: center;
  }
`;

export default () => {
  return <MyComponent>Welcome User</MyComponent>;
};
