import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import normaliseTitleStyle from '../utils/normaliseTitleStyle';
import ImageWrapper from './ImageWrapper';
import TitleBlock from './TitleBlock';

const ContentBlockStyles = styled.div`
  display: flex;
  gap: 96px;
  align-items: center;

  .reverse {
    flex-direction: row-reverse;
  }

  div {
    flex-grow: 1;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 48px;

    .parent {
      margin-left: 0px;
    }
  }
`;

function ContentBlock(props) {
  // const { backgroundColumnStyle, columnOne, columnTwo, columnThree } = props;
  const { contentArray } = props;
  console.log(contentArray.title_style);
  return (
    <ContentBlockStyles
      className={`${contentArray.content_order ? 'reverse' : ''}`}
    >
      <div>
        <TitleBlock
          titleText={contentArray.section_title.text}
          headingSize={contentArray.heading_size.slice(-2)}
          titleStyle={normaliseTitleStyle(contentArray.title_style) || ''}
        />
        <HTMLRenderer html={contentArray.text_content.html} />
      </div>
      {contentArray.image_content.url ? (
        <div>
          <ImageWrapper
            imageSource={contentArray.image_content.url || ''}
            imageAlt={contentArray.image_content.alt}
            imageCredit={contentArray.image_source || 'Image via Unsplash'}
            imageSourceLink={contentArray.image_source_link.url || ''}
            imageBlockColourStyle={
              contentArray.image_block_colour_style || 'dusk-pink-500'
            }
            imageColourBlockPosition={
              contentArray.image_block_colour_position || 'TopRight'
            }
          />
        </div>
      ) : null}
    </ContentBlockStyles>
  );
}

export default ContentBlock;
