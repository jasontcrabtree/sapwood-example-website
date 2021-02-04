import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import uuid from 'react-uuid';
import ImageWrapper from '../ImageWrapper';
import HeroTitleBlockOne from '../titles/HeroTitleBlockOne';
import TitleBlockOne from '../titles/TitleBlockOne';
import TitleBlockTwo from '../titles/TitleBlockTwo';

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
            <HeroTitleBlockOne key={bC.id} title={bC.primary.main_page_title} />
          );
        }
        if (bC.slice_type === 'column_text') {
          return (
            <div key={uuidKey + i}>
              <TitleBlockTwo
                key={bC.id}
                title={bC.primary.section_title.text}
                headingLevel="h2"
              />
              {bC.items.map((text, id, item) => {
                console.log(text, item);
                return (
                  <div key={uuid + id}>
                    <img
                      key={uuidKey + text.column_image_content.url}
                      src={text.column_image_content.url}
                      alt={text.column_image_content.alt}
                    />
                    <h4 key={uuidKey + text.column_text_title.text}>
                      {text.column_text_title.text}
                    </h4>
                    <HTMLRenderer
                      key={uuidKey + text.column_text_content.html}
                      html={text.column_text_content.html}
                    />
                  </div>
                );
              })}
            </div>
          );
        }
        if (bC.slice_type === 'card_grid_section') {
          return <p key={bC.id}>Card Grid</p>;
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
              // imageBlockSize={bC.primary.image_block_size}
              // imageColourBlockSize={bC.primary.image_colour_block_size}
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
