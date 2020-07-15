import tw from 'tailwind.macro';
import styled from '@emotion/styled';

export default styled.button`
  ${(props) =>
    props.active
      ? tw`bg-green-500 border border-black text-black font-bold py-2 px-4 rounded-md shadow-md mx-4`
      : tw`bg-black border border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-bold py-2 px-4 rounded-md shadow-md mx-4`}
`;
