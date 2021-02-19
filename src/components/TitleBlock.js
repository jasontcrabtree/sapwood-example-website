import React from 'react';
import styled from 'styled-components';

import BrandTurquoiseCircle from '../../static/brand-turquoise-circle.svg';
import BrandSquare from '../../static/brand-square.svg';

const TitleWrapperStyles = styled.div`
  color: var(--turquoise-700);
  padding-top: 36px;
  display: flex;

  /* z-index: -5; */

  h2,
  h3,
  h4,
  h5 {
    max-width: 736px;
  }

  .hero {
    text-transform: uppercase;
  }

  .left {
    justify-content: flex-start;
    text-align: left;
  }

  .center {
    justify-content: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const TitleBlockTwoStyles = styled.div`
  position: relative;
  width: fit-content;

  .brand-circles {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 0px;
    padding: 0px;
    padding-bottom: 24px;
    max-width: 12px;
  }

  @media screen and (max-width: 920px) {
    .brand-circles {
      display: flex;
      width: fit-content;
      margin: 0 auto;
    }
  }
`;

const TitleBlockThreeStyles = styled.div`
  padding-top: 24px;
  position: relative;

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

const TitleBlockFourStyles = styled.div`
  position: relative;
  padding-left: 40px;
  padding-top: 36px;

  z-index: -8;

  ::after {
    background: var(--honey-300);
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    height: 80px;
    width: 160px;
    z-index: -11;
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

const HeroTitleBlockTwoStyles = styled.div`
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

const HeroTitleBlockThreeStyles = styled.div`
  text-align: center;
  padding-bottom: 24px;

  position: relative;
  z-index: -10;

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

const HeroTitleBlockFourStyles = styled.div`
  text-align: center;
  position: relative;
  z-index: -10;

  ::after {
    background: var(--honey-300);
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    height: 40px;
    width: 160px;
    z-index: -10;
  }
`;

function TitleBlock(props) {
  if (!props) return null;
  const {
    titleText,
    headingSize,

    hero,
    titleAlignment,
    serifStyle,

    titleStyle,
  } = props;
  // console.log(props);

  // Change size based on props, check to see if semantic, default to h2
  const semanticHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingSize ? headingSize.toLowerCase() : '';
  const TitleSize = semanticHeadings.includes(safeHeading) ? safeHeading : 'h2';

  if (titleStyle === 'TitleBlockOne' || titleStyle === 'titleone-simple') {
    return (
      <TitleWrapperStyles className="center">
        <TitleSize
          className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
            titleAlignment ? 'center' : 'left'
          }`}
        >
          {titleText}
        </TitleSize>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'TitleBlockTwo' ||
    titleStyle === 'titletwo-dots' ||
    titleStyle === 'dot'
  ) {
    return (
      <TitleWrapperStyles>
        <TitleBlockTwoStyles>
          <div className="brand-circles">
            <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
            <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
            <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
            <img src={BrandTurquoiseCircle} alt="Turquoise Circle" />
          </div>
          <TitleSize
            className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
              titleAlignment ? 'center' : ''
            }`}
          >
            {titleText}
          </TitleSize>
        </TitleBlockTwoStyles>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'TitleBlockThree' ||
    titleStyle === 'titlethree-line' ||
    titleStyle === 'three-line' ||
    titleStyle === 'line'
  ) {
    return (
      <TitleWrapperStyles>
        <TitleBlockThreeStyles>
          <TitleSize
            className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
              titleAlignment ? 'left' : ''
            }`}
          >
            {titleText}
          </TitleSize>
        </TitleBlockThreeStyles>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'TitleBlockFour' ||
    titleStyle === 'titlefour-block' ||
    titleStyle === 'block'
  ) {
    return (
      <TitleWrapperStyles>
        <TitleBlockFourStyles>
          <TitleSize
            className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
              titleAlignment ? 'center' : ''
            }`}
          >
            {titleText}
          </TitleSize>
        </TitleBlockFourStyles>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'HeroTitleBlockOne' ||
    titleStyle === 'herotitleone-simple'
  ) {
    return (
      <TitleWrapperStyles>
        <TitleSize className="h1-hero h1-hero-v1">{titleText}</TitleSize>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'HeroTitleBlockTwo' ||
    titleStyle === 'herotitletwo-squares'
  ) {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockTwoStyles className="center">
          <TitleSize className="h1-hero h1-hero-v3">{titleText}</TitleSize>
          <div className="brand-sqs">
            <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
            <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
            <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
            <img src={BrandSquare} alt="Small Pink Square with Curved Edges" />
          </div>
        </HeroTitleBlockTwoStyles>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'HeroTitleBlockThree' ||
    titleStyle === 'herotitlethree-line'
  ) {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockThreeStyles className="center">
          <TitleSize className="h1-hero h1-hero-v3">{titleText}</TitleSize>
        </HeroTitleBlockThreeStyles>
      </TitleWrapperStyles>
    );
  }
  if (
    titleStyle === 'HeroTitleBlockFour' ||
    titleStyle === 'herotitlefour-block'
  ) {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockFourStyles className="center">
          <TitleSize className="h1-hero h1-hero-v4">{titleText}</TitleSize>
        </HeroTitleBlockFourStyles>
      </TitleWrapperStyles>
    );
  }
  if (!titleStyle) {
    return (
      <TitleWrapperStyles>
        <TitleSize
          className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
            titleAlignment ? 'center' : 'left'
          }`}
        >
          {titleText}
        </TitleSize>
      </TitleWrapperStyles>
    );
  }
}

export default TitleBlock;
