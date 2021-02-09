import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import uuid from 'react-uuid';
import CardGridBlock from '../CardGridBlock';
import ImageWrapper from '../ImageWrapper';
import ColumnBlock from '../ColumnBlock';
import TitleBlock from '../TitleBlock';
import ContentBlock from '../ContentBlock';
import normaliseTitleStyle from '../../utils/normaliseTitleStyle';

const SliceZone = (props) => {
  if (!props) return null;
  const { body } = props;

  const uuidKey = uuid();

  // console.log(props);
  // bC = short for bodyContent

  // console.log(props);

  // const titleStyle = body[0].primary.title_style;

  // console.log(titleStyle.toLowerCase().replace(/\s/g, ''));

  // const fixStyle = toLowerCase().replace(/\s/g, '');

  // console.log(normaliseTitleStyle('hello world'));

  // console.log(props);

  // body.map((titles, i) =>
  //   console.log(normaliseTitleStyle(titles.primary.title_style) || '')
  // );

  return (
    <>
      {body.map((bC, i) => {
        if (bC.slice_type === 'page_title_block') {
          return (
            <TitleBlock
              key={bC.id}
              titleText={bC.primary.main_page_title}
              headingSize={bC.primary.heading_size.slice(-2)}
              titleStyle={normaliseTitleStyle(bC.primary.title_style) || ''}
            />
          );
        }
        if (bC.slice_type === 'column_text') {
          return (
            <div key={uuidKey + i}>
              <HTMLRenderer html={bC.primary.text_content.html} />
            </div>
          );
        }
        if (bC.slice_type === 'card_grid_block') {
          console.log(normaliseTitleStyle(bC.primary.title_style));
          return (
            <div key={bC.id}>
              <TitleBlock
                titleText={bC.primary.card_grid_title.text}
                // fixed heading size
                headingSize="h3"
                titleStyle={normaliseTitleStyle(bC.primary.title_style) || ''}
              />
              <CardGridBlock
                arrowboolean
                cardKeys={uuidKey}
                cardArray={bC.items || ''}
              />
            </div>
          );
        }
        if (bC.slice_type === 'column_text_block') {
          console.log(bC);
          return (
            <div key={bC.id}>
              <TitleBlock
                titleText={bC.primary.section_title.text}
                // fixed heading size
                titleStyle={normaliseTitleStyle(bC.primary.title_style) || ''}
                headingSize="h3"
              />
              <ColumnBlock
                listKeys={uuidKey}
                listArray={bC.items || ''}
                columnBackground
              />
            </div>
          );
        }
        if (bC.slice_type === 'column_text_section') {
          return <p key={bC.id}>Column Text Section</p>;
        }
        if (bC.slice_type === 'content_block') {
          return (
            <div key={bC.id}>
              <ContentBlock
                contentKeys={uuidKey}
                contentArray={bC.primary || ''}
              />
            </div>
          );
        }
        if (bC.slice_type === 'blog_post_content') {
          return (
            <HTMLRenderer
              key={i}
              html={bC.items[0].blog_post_text_content.html}
            />
          );
        }
        if (bC.slice_type === 'image_block') {
          return (
            <ImageWrapper
              key={bC.id}
              imageAlt={bC.primary.image.alt}
              imageCredit={bC.primary.image_source || 'Image via Unsplash'}
              imageSource={bC.primary.image.url || ''}
              imageSourceLink={bC.primary.image_source_link.url || ''}
              imageBlockColourStyle={bC.primary.image_block_colour_style || ''}
              imageColourBlockPosition={bC.primary.image_block_colour_position}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default SliceZone;
