import React from 'react';
import styled from 'styled-components';

const HeroTitleBlockFourStyles = styled.h1`
  text-align: center;
  position: relative;

  ::after {
    background: var(--honey-300);
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    height: 40px;
    width: 160px;
    z-index: -1;
  }
`;

function HeroTitleBlockFour(props) {
  const { title } = props;
  return (
    <HeroTitleBlockFourStyles className="h1-hero h1-hero-v4">
      {title}
    </HeroTitleBlockFourStyles>
  );
}

export default HeroTitleBlockFour;
