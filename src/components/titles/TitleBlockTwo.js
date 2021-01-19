import React from 'react';
import styled from 'styled-components';
import BrandTurquoiseCircle from '../../../static/brand-turquoise-circle.svg';

const TitleBlockTwoStyles = styled.div`
  color: var(--turquoise-700);

  position: relative;
  width: fit-content;
  text-align: center;

  height: 92px;

  .brand-circles {
    display: flex;
    gap: 16px;
    margin: 0px;
    padding: 0px;
    padding-bottom: 24px;
  }
`;

function TitleBlockTwo(props) {
  const { title, headingLevel, serifStyle } = props;
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'h2';

  return (
    <TitleBlockTwoStyles>
      <div className="brand-circles">
        <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
        <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
        <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
        <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
      </div>
      <Title className={serifStyle}>{title}</Title>
    </TitleBlockTwoStyles>
  );
}

export default TitleBlockTwo;
