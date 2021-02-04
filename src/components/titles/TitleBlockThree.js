import React from 'react';
import styled from 'styled-components';

const TitleBlockOneStyles = styled.div`
  color: var(--turquoise-700);

  padding-top: 24px;

  position: relative;

  /* height: 92px; */

  ::after {
    content: '';
    background: var(--dusk-pink-500);
    position: absolute;
    top: 0;
    height: 8px;
    width: 144px;
    left: 0;
  }
`;

function TitleBlockThree(props) {
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

export default TitleBlockThree;
