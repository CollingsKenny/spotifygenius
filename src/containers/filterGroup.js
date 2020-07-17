import React from 'react';
import styled from '@emotion/styled';
import { Icon, InlineIcon } from '@iconify/react';
import adjustmentsIcon from '@iconify/icons-heroicons-outline/adjustments';
import clockIcon from '@iconify/icons-heroicons-outline/clock';

const FilterContainer = styled.article`
    display:flex;
    flex-direction:column;
    padding:4rem 2rem;
`;
const OptionContainer = styled.div`
    display:inherit;
    flex-direction:inherit;
    justify-content:center;
    align-items:center;
    margin: 1rem 0;
  
`;
const IconContainer = styled.div`
    padding:1rem 0;
`;
const FilterInput = styled.div`
    width:100%;
    color:#FFF;
    justify-content:center;
    text-align:center;
    border-bottom:3px solid #FFF;
`;
const InputText = styled.h6`
    font-weight:bold;
    font-size:28px;

`

const FilterGroup = () => {
    return (
        <FilterContainer>
            <OptionContainer>
                <IconContainer>
                    <Icon width="55" height="55" color="#FFF" icon={adjustmentsIcon}></Icon>
                </IconContainer>
                <FilterInput><InputText>15</InputText></FilterInput>
            </OptionContainer>
            <OptionContainer>
                <IconContainer>
                    <Icon width="55" height="55" color="#FFF" icon={clockIcon}></Icon>
                </IconContainer>
                <FilterInput><InputText>This Month</InputText></FilterInput>
            </OptionContainer>
        </FilterContainer>
    )
}
export default FilterGroup;





