import React from 'react';
import styled from 'styled-components';

const TitleBlockOneStyles = styled.div`
  color: var(--turquoise-700);

  position: relative;

  padding-left: 40px;

  padding-top: 36px;

  ::after {
    background: var(--honey-300);
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 80px;
    width: 160px;
    z-index: -1;
  }

  @media screen and (max-width: 920px) {
    padding-top: 16px;
    padding-left: 16px;

    ::after {
      top: 0px;
      left: 0px;
      height: 80px;
      width: 136px;
    }
  }
`;

function TitleBlockFour(props) {
  const { title, headingLevel, serifStyle } = props;
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'h2';

  return (
    <TitleBlockOneStyles>
      <Title className={serifStyle}>{title}</Title>
    </TitleBlockOneStyles>
  );
}

export default TitleBlockFour;
