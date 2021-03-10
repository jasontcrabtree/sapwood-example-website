import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import uuid from 'react-uuid';
import CardGridBlock from '../CardGridBlock';
import ImageWrapper from '../ImageWrapper';
import ColumnBlock from '../ColumnBlock';
import TitleBlock from '../TitleBlock';
import ContentBlock from '../ContentBlock';
import normaliseTitleStyle from '../../utils/normaliseTitleStyle';
import CustomBlock from '../CustomBlock';
import GlobalCTA from './GlobalCTA';
import DividerLine from '../DividerLine';

const SliceZone = (props) => {
  if (!props) return <h1>No Props, error</h1>;
  const { body } = props;

  const uuidKey = uuid();

  return (
    <>
      {body.map((bC, i) => {
        console.log(bC);
        if (bC.slice_type === 'page_title_block') {
          return (
            <TitleBlock
              key={bC.id}
              titleText={bC.primary.main_page_title || 'Error'}
              headingSize={bC.primary.heading_size.slice(-2) || 'h2'}
              titleStyle={normaliseTitleStyle(bC.primary.title_style) || ''}
            />
          );
        }
        if (bC.slice_type === 'column_text') {
          return (
            <div key={uuidKey + i}>
              <HTMLRenderer html={bC.primary.text_content.html || null} />
            </div>
          );
        }
        if (bC.slice_type === 'card_grid_block') {
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
                gridStyles={bC.primary}
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
              html={bC.items[0].blog_post_text_content.html || ''}
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
        if (bC.slice_type === 'custom_block') {
          if (bC.primary.custom_component_name === 'CTAContact') {
            return (
              <div key={bC.id}>
                <GlobalCTA />
              </div>
            );
          }
          return (
            <div key={bC.id}>
              <CustomBlock
                customComponentName={bC.primary.custom_component_name}
              />
            </div>
          );
        }
        if (bC.slice_type === 'divider_line') {
          return (
            <div key={bC.id}>
              <DividerLine />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SliceZone;
