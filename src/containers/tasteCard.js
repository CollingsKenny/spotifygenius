import React from 'react';
import styled from '@emotion/styled';

const Card = styled.article`
    width:410px;
    height:485px;
    display:flex;
    flex-direction:column;
    text-align:left;
    background:#222222;
    border-radius:50px;
 
`;

const TasteTitle = styled.h2`
    font-family: Work Sans, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size:48px;
    padding: 1rem 1rem;
`;

const ItemTitle = styled.h4`
    font-family: Work Sans, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size:24px;
    padding: 1rem 1rem;
`;

const TasteCard = ({ type, items }) => {
    return (
        <Card>
            <TasteTitle>{type}</TasteTitle>
        </Card>
    );
}
export default TasteCard;