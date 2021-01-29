import React from 'react';
import HTMLRenderer from 'react-html-renderer';
// import Hero from './hero';
// import CallToActionGrid from './callToActionGrid';
// import PriceList from './priceList';

const SliceZone = (props) => {
  if (!props) return null;

  const { body } = props;

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
            <figure
              key={i}
              style={{
                borderColor: `${bodyContent.items[0].image_block_colour_style}`,
                borderWidth: `4px`,
                borderStyle: `solid`,
              }}
            >
              <img
                src={bodyContent.items[0].image.url}
                alt={bodyContent.items[0].image.alt}
              />
              <figcaption className="eyebrow">Photo Credit</figcaption>
            </figure>
          );
        }
        return null;
      })}
    </>
  );
};

export default SliceZone;
