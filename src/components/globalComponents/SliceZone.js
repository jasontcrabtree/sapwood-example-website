import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import ImageWrapper from '../ImageWrapper';

const SliceZone = (props) => {
  if (!props) return null;
  const { body } = props;

  console.log(props);

  return (
    <>
      {body.map((bodyContent, i) => {
        if (bodyContent.slice_type === 'blog_post_content') {
          return (
            <HTMLRenderer
              key={i}
              html={bodyContent.items[0].blog_post_text_content.html}
            />
          );
        }
        if (bodyContent.slice_type === 'image_block') {
          return (
            <ImageWrapper
              key={i}
              imageAlt={bodyContent.items[0].image.alt}
              imageCredit={
                bodyContent.items[0].image_credit || 'Image via Unsplash'
              }
              imageSource={bodyContent.items[0].image.url || ''}
              imageSourceLink={bodyContent.items[0].image_source_link.url || ''}
              imageBlockColourStyle={
                bodyContent.items[0].image_block_colour_style || ''
              }
              imageBlockSize={bodyContent.primary.image_block_size}
              imageColourBlockSize={bodyContent.primary.image_colour_block_size}
              imageColourBlockPosition={
                bodyContent.primary.image_colour_block_position
              }
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default SliceZone;
