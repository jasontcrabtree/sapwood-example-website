import React from 'react';
import styled from 'styled-components';

const ImageWrapperStyles = styled.figure`
  /*
  .parent > img {
    max-width: 596px;
    max-height: 447px;
    object-fit: contain;
  } */

  display: grid;

  width: fit-content;
  margin: 24px auto 0px;
  padding-right: 16px;

  position: relative;
  align-self: center;

  img {
    width: 600px;
    height: 448px;
    object-fit: cover;
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
    left: 64px;
    top: -32px;
  }
  .bottom-right {
    bottom: -8px;
    right: -16px;
  }
  .bottom-centre {
  }
  .bottom-left {
    bottom: -8px;
    left: -32px;
  }
  .top-left {
    background-color: var(--grey-300);
    top: -32px;
    left: -32px;
  }
  .top-centre {
  }
`;

function ImageWrapper(props) {
  const {
    imageAlt,
    imageSource,
    imageSourceLink,
    imageCredit,
    imageBlockColourStyle,
    imageBlockSize,
    imageColourBlockSize,
    imageColourBlockPosition,
  } = props;

  console.log(props);

  // if (imageStyle === 'OneTopRight') {
  //   // console.log('hello');
  // }

  return (
    <ImageWrapperStyles className="parent" background={imageBlockColourStyle}>
      <div
        className={`color-block color-block-colour size
      ${imageColourBlockPosition === 'TopRight' ? 'top-right' : ''}
      ${imageColourBlockPosition === 'BottomRight' ? 'bottom-right' : ''}
      ${imageColourBlockPosition === 'BottomLeft' ? 'bottom-left' : ''}
      ${imageColourBlockPosition === 'TopLeft' ? 'top-left' : ''}
      ${imageColourBlockPosition === 'Top' ? 'top-left' : ''}
      ${imageColourBlockPosition === 'Bottom' ? 'top-left' : ''}
      `}
      />
      <img src={imageSource} alt={imageAlt} />
      <figcaption className="eyebrow">
        <a href={imageSourceLink}>{imageCredit}</a>
      </figcaption>
    </ImageWrapperStyles>
  );
}

export default ImageWrapper;

// condition ? exprIfTrue : exprIfFalse

// ImageWrapper TODO

/*

Image Styles

Image Size
- Small
- Medium

Block Size
- SmallBlock
- MediumBlock

Block Position
- Top
- Bottom
- TopRight
- BottomRight
- BottomLeft
- TopLeft

Top
Bottom
TopRight
BottomRight
BottomLeft
TopLeft


*/

/*

1. Write base component HTML
2. Define required Prismic info (with fallbacks if not avaliable)
3. Style default (responsive) image styles (figure, image, aspect ratio)
4. FigCaption - is it a link?
5. Create seperate styled components for each of the 8 different image wrapper styles
6. Create a function, ternary, or set of nested if statements to amend the styles based on the component image_block_style (with fallback)
7. Change the colour of the image block based on the prismic image_block_colour_style data (with fallback)
8. Set defaults for image block if none provided by author

*/

/* top: ${(props) =>
  props.imageStyle === 'OneTopRight' ? '-32px' : '0'}; */

/* top: ${(props) => (props.imageStyle ? '-32px' : '0px')}; */

/* ${(props) =>
  props.imageStyle ===
  OneTopRight`
    top: '-32px';
  `} */

/* top: ${(imageStyle) =>
  imageStyle === 'OneTopRight' ? '-32px' : '0px'}; */

/* top: ${(imageStyle) =>
  imageStyle === 'OneTopRight' ? '-32px' : '0px'}; */

/* ${props.upsidedown && 'transform: rotate(180deg);'} */

/* ${(props) => $`{props.imageStyle && 'top: -132px;'}`} */
