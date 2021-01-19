import React from 'react';
import styled from 'styled-components';
import BrandSquare from '../../../static/brand-square.svg';

const HeroTitleBlockTwoStyles = styled.h1`
  width: fit-content;
  text-align: center;

  .brand-sqs {
    display: flex;
    gap: 16px;
    margin: 0px;
    padding: 0px;
    padding-top: 24px;
    justify-content: center;
  }
`;

function HeroTitleBlockTwo(props) {
  const { title } = props;
  return (
    <HeroTitleBlockTwoStyles className="h1-hero">
      {title}
      <div className="brand-sqs">
        <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
        <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
        <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
        <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
      </div>
    </HeroTitleBlockTwoStyles>
  );
}

export default HeroTitleBlockTwo;
