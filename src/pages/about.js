import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import SliceZone from '../components/globalComponents/SliceZone';

export const aboutPageQuery = graphql`
  query aboutPage {
    prismicAboutPage {
      id
      data {
        body {
          __typename
          ... on PrismicAboutPageBodyPageTitleBlock {
            id
            slice_type
            primary {
              main_page_title
              heading_size
              text_alignment
              title_style
            }
          }
          ... on PrismicAboutPageBodyContentBlock {
            id
            slice_type
            primary {
              section_title {
                text
              }
              content_order
              heading_size
              image_block_colour_position
              image_block_colour_style
              image_source
              image_content {
                url
                alt
              }
              image_source_link {
                url
              }
              text_content {
                html
              }
              title_style
            }
          }
          ... on PrismicAboutPageBodyCardGridBlock {
            id
            slice_type
            primary {
              title_style
              content_author
              card_grid_title {
                text
              }
              card_grid_style
            }
            items {
              card_title {
                text
              }
              card_link_destination {
                url
              }
              card_image {
                alt
                url
              }
            }
          }
          ... on PrismicAboutPageBodyColumnTextBlock {
            id
            slice_type
            primary {
              column_background_style
              heading_size
              title_style
              section_title {
                text
              }
            }
            items {
              column_item_title {
                text
              }
              column_text_content {
                html
              }
            }
          }
          ... on PrismicAboutPageBodyCustomBlock {
            id
            slice_type
            primary {
              custom_component_name
              heading_size
              section_title {
                text
              }
              text_alignment
              title_style
            }
          }
          ... on PrismicAboutPageBodyImageBlock {
            id
            slice_type
            primary {
              image {
                alt
                url
              }
              image_block_colour_position
              image_block_colour_style
              image_position
              image_source
              image_source_link {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const SinglePageContainerStyles = styled.main`
  section {
    display: grid;
    grid-column: 1 / -1;
    justify-content: center;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 96px; */
  }

  img {
    /* width: 160%; */
  }

  section > * + * {
    margin-top: 120px;
  }

  section > * {
    /* width: 100%; */
    /* max-width: 100%; */
    /* margin-left: auto;
    margin-right: auto; */
  }

  section > * + * {
    /* margin-top: 96px; */
  }

  section > figure {
    /* margin-top: 96px; */
  }
`;

const index = (props) => {
  if (!props) return null;
  const sliceZoneBody = props.data.prismicAboutPage.data.body;

  return (
    <SinglePageContainerStyles id="main">
      <SEO />
      <section>
        <SliceZone body={sliceZoneBody} />
      </section>
    </SinglePageContainerStyles>
  );
};

export default index;
