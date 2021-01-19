import React from 'react';
import styled from 'styled-components';

const HeroTitleBlockThreeStyles = styled.h1`
  text-align: center;
  padding-bottom: 24px;

  position: relative;

  ::after {
    content: '';
    background: var(--dusk-pink-600);
    position: absolute;
    bottom: 0;
    height: 8px;
    width: 17%;
    left: 41.5%;
    right: 41.5%;
  }
`;

function HeroTitleBlockThree(props) {
  const { title } = props;
  return (
    <HeroTitleBlockThreeStyles className="h1-hero h1-hero-v3">
      {title}
    </HeroTitleBlockThreeStyles>
  );
}

export default HeroTitleBlockThree;
