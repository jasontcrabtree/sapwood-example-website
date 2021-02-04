import React from 'react';
import styled from 'styled-components';

import BrandTurquoiseCircle from '../../../static/brand-turquoise-circle.svg';
import BrandSquare from '../../../static/brand-square.svg';

const TitleWrapperStyles = styled.div`
  color: var(--turquoise-700);
  padding-top: 36px;

  .hero {
    text-transform: uppercase;
  }

  .center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TitleBlockTwoStyles = styled.div`
  position: relative;
  width: fit-content;

  .brand-circles {
    display: flex;
    gap: 16px;
    margin: 0px;
    padding: 0px;
    padding-bottom: 24px;
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

  ::after {
    background: var(--honey-300);
    content: '';
    position: absolute;
    top: 0px;
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
  //   console.log(props);

  // Change size based on props, check to see if semantic, default to h2
  const semanticHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingSize ? headingSize.toLowerCase() : '';
  const TitleSize = semanticHeadings.includes(safeHeading) ? safeHeading : 'h2';

  if (titleStyle === 'TitleBlockOne') {
    return (
      <TitleWrapperStyles>
        <TitleSize
          className={`${hero ? 'h1-hero' : ''} ${serifStyle ? 'serif' : ''} ${
            titleAlignment ? 'center' : ''
          }`}
        >
          {titleText}
        </TitleSize>
      </TitleWrapperStyles>
    );
  }
  if (titleStyle === 'TitleBlockTwo') {
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
  if (titleStyle === 'TitleBlockThree') {
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
  if (titleStyle === 'TitleBlockFour') {
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
  if (titleStyle === 'HeroTitleBlockOne') {
    return (
      <TitleWrapperStyles>
        <TitleSize className="h1-hero h1-hero-v1">{titleText}</TitleSize>
      </TitleWrapperStyles>
    );
  }
  if (titleStyle === 'HeroTitleBlockTwo') {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockTwoStyles>
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
  if (titleStyle === 'HeroTitleBlockThree') {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockThreeStyles>
          <TitleSize className="h1-hero h1-hero-v3">{titleText}</TitleSize>
        </HeroTitleBlockThreeStyles>
      </TitleWrapperStyles>
    );
  }
  if (titleStyle === 'HeroTitleBlockFour') {
    return (
      <TitleWrapperStyles>
        <HeroTitleBlockFourStyles>
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
            titleAlignment ? 'center' : ''
          }`}
        >
          {titleText}
        </TitleSize>
      </TitleWrapperStyles>
    );
  }
}

export default TitleBlock;
