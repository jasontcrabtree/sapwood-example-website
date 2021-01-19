import React from 'react';
import styled from 'styled-components';

const TitleBlockOneStyles = styled.div`
  color: var(--turquoise-700);

  padding-top: 36px;
`;

function TitleBlockOne(props) {
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

export default TitleBlockOne;
