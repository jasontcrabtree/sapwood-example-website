import React from 'react';
import styled from 'styled-components';

const ImageWrapperStyles = styled.figure`
  display: grid;
  width: fit-content;
  margin-left: 0;
  margin-right: auto;
  padding-left: 0;
  padding-right: 16px;
  margin-top: 8px;
  margin-bottom: 8px;

  position: relative;

  img {
    width: 600px;
    height: 448px;
    object-fit: cover;
    box-shadow: 0px 0px 1px 1px rgba(0.1, 0.1, 0.1, 0.01);
  }

  /* ::after, */
  .size {
    height: 416px;
    height: 90%;
    width: 568px;
    width: 92.2%;
  }
  .color-block {
    content: '';
    position: absolute;
    z-index: -1;
  }
  .color-block-colour {
    background-color: var(--green-300);
    background-color: ${(props) => props.background};
  }

  .top-right {
    right: -16px;
    top: -32px;
  }
  .bottom-right {
    bottom: -32px;
    right: -16px;
  }
  .bottom-centre {
    bottom: -32px;
    width: 82%;
    left: 8%;
    right: 8%;
  }
  .bottom-left {
    bottom: -32px;
    left: -32px;
  }
  .top-left {
    top: -32px;
    left: -32px;
  }
  .top-centre {
    top: -32px;
    width: 82%;
    left: 8%;
    right: 8%;
  }

  @media screen and (max-width: 920px) {
    padding-right: 16px;
    padding-left: 16px;

    .top-right {
      right: -8px;
      top: -24px;
    }
    .bottom-right {
      bottom: -24px;
      right: -8px;
    }
    .bottom-centre {
      bottom: -24px;
      width: 72%;
      left: 48px;
      right: 48px;
      margin-left: auto;
      margin-right: auto;
    }
    .bottom-left {
      bottom: -24px;
      left: -16px;
    }
    .top-left {
      top: -24px;
      left: -16px;
    }
    .top-centre {
      top: -24px;
      width: 72%;
      left: 48px;
      right: 48px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

function ImageWrapper(props) {
  const {
    imageAlt,
    imageSource,
    imageSourceLink,
    imageCredit,
    imageBlockColourStyle,
    // imageBlockSize,
    // imageColourBlockSize,
    imageColourBlockPosition,
  } = props;

  return (
    <ImageWrapperStyles
      className="parent "
      background={`var(--${imageBlockColourStyle.toLowerCase()})`}
    >
      <div
        className={`color-block color-block-colour size ${
          imageColourBlockPosition === 'TopRight' ? 'top-right' : ''
        }${imageColourBlockPosition === 'BottomRight' ? 'bottom-right' : ''}${
          imageColourBlockPosition === 'BottomLeft' ? 'bottom-left' : ''
        }${imageColourBlockPosition === 'TopLeft' ? 'top-left' : ''}${
          imageColourBlockPosition === 'Top' ? 'top-centre' : ''
        }${imageColourBlockPosition === 'Bottom' ? 'bottom-centre' : ''}`}
      />
      {imageColourBlockPosition === 'BottomLeft' ||
      imageColourBlockPosition === 'BottomRight' ||
      imageColourBlockPosition === 'Bottom' ? (
        <>
          <figcaption className="eyebrow" background={imageBlockColourStyle}>
            <a href={imageSourceLink}>{imageCredit}</a>
          </figcaption>
          <img src={imageSource} alt={imageAlt} />
        </>
      ) : (
        <>
          <img src={imageSource} alt={imageAlt} />
          <figcaption className="eyebrow" background={imageBlockColourStyle}>
            <a href={imageSourceLink}>{imageCredit}</a>
          </figcaption>
        </>
      )}
    </ImageWrapperStyles>
  );
}

export default ImageWrapper;
