import React from 'react';
import styled from '@emotion/styled';

import TasteCard from '../containers/tasteCard';
import FilterGroup from '../containers/filterGroup';

const CategoryHeader = styled.div`
  height: 87px;
  width: inherit;
  padding: 0.5rem 2rem;
  text-align: left;
  border-bottom: 1px solid #656464;
`;
const CategoryTitle = styled.h2`
  font-family: Work Sans, -apple-system, BlinkMacSystemFont;
  font-weight: bold;
  font-size: 48px;
  color: #fff;
`;

const CategorySubTitle = styled.h2`
  font-family: Work Sans, -apple-system, BlinkMacSystemFont;
  font-weight: bold;
  font-size: 36px;
  color: #fff;
`;

const CategoryContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 4rem;
`;
const CategoryContentDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;
const CategoryFrame = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function favorites() {
  return (
    <CategoryFrame>
      <CategoryHeader>
        <CategoryTitle>Favorites</CategoryTitle>
      </CategoryHeader>
      <CategoryContentWrapper>
        <CategorySubTitle>
          Your Favorite Artists & Songs This Month
        </CategorySubTitle>
        <CategoryContentDisplay>
          {/* <TasteCard type={'Artists'} items={userTaste.artists} />
          <FilterGroup />
          <TasteCard
            type={'Songs'}
            items={userTaste.tracks}
            features={tracksFeatures}
          /> */}
        </CategoryContentDisplay>
      </CategoryContentWrapper>
    </CategoryFrame>
  );
}
