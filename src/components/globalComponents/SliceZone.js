import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import uuid from 'react-uuid';
import CardGridBlock from '../CardGridBlock';
import ImageWrapper from '../ImageWrapper';
import ColumnBlock from '../ColumnBlock';
import TitleBlock from '../TitleBlock';

const SliceZone = (props) => {
  if (!props) return null;
  const { body } = props;

  const uuidKey = uuid();

  // console.log(props);
  // bC = short for bodyContent

  return (
    <>
      {body.map((bC, i) => {
        if (bC.slice_type === 'page_title_block') {
          return (
            <TitleBlock
              key={bC.id}
              titleText={bC.primary.main_page_title}
              titleAlignment
              headingSize="h1"
              titleStyle="HeroTitleBlockTwo"
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
        /* if (bC.slice_type === 'card_grid_section') {
          return <p key={bC.id}>Card Grid</p>;
        } */
        if (bC.slice_type === 'card_grid_block') {
          return (
            <div key={bC.id}>
              <TitleBlock
                titleText={bC.primary.card_grid_title.text}
                headingSize="h3"
                titleStyle="TitleBlockTwo"
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
          return (
            <div key={bC.id}>
              <TitleBlock
                titleText={bC.primary.section_title.text}
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
              imageColourBlockPosition={bC.primary.image_colour_block_position}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default SliceZone;
