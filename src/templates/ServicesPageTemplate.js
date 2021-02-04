import React from 'react';
import { graphql } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import SliceZone from '../components/globalComponents/SliceZone';
import CardGridFour from '../components/cardBlocks/CardGridFour';
import TextColumns from '../components/textSections/TextColumns';
import ImageTextReverseOrder from '../components/textSections/ImageTextReverseOrder';
import CardGridTwo from '../components/cardBlocks/CardGridTwo';

export const servicesPageQuery = graphql`
  query servicesRepeatablePage($uid: String) {
    prismicServicesRepeatable(uid: { eq: $uid }) {
      uid
      data {
        body {
          ... on PrismicServicesRepeatableBodyImageBlock {
            id
            slice_type
            primary {
              image {
                url
                alt
              }
              image_block_colour_style
              image_colour_block_position
              image_source
              image_source_link {
                url
              }
            }
          }
          ... on PrismicServicesRepeatableBodyPageTitleBlock {
            id
            slice_type
            primary {
              title_style
              text_alignment
              main_page_title
              heading_size
            }
          }
          ... on PrismicServicesRepeatableBodyColumnText {
            id
            slice_type
            primary {
              title_style
              section_title {
                text
              }
              heading_size
              content_order
              image_block_colour_position
              image_block_colour_style
              image_source
              image_source_link {
                url
              }
              image_content {
                alt
                url
              }
              text_content {
                html
              }
            }
          }
          ... on PrismicServicesRepeatableBodyCardGridSection {
            id
            slice_type
            primary {
              title_style
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
                url
                alt
              }
            }
            slice_label
          }
          ... on PrismicServicesRepeatableBodyColumnTextSection {
            id
            slice_type
            slice_label
            primary {
              section_title {
                text
              }
              heading_size
              column_background_style
              title_style
            }
            items {
              column_text_content {
                html
              }
              column_item_title {
                html
              }
            }
          }
        }
      }
      url
    }
  }
`;

const ServicesPageMainStyles = styled.main`
  section {
    border: 1px solid red;
  }

  section {
    display: grid;
    grid-column: 1 / -1;
    justify-content: center;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 96px; */
  }

  section > * + * {
    margin-top: 96px;
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
    margin-top: 96px;
  }
`;

const ServicesPageTemplate = (props) => {
  const { data } = props;

  // console.log(data);

  const servicesRepeatableSliceData = data.prismicServicesRepeatable.data.body;

  console.log(servicesRepeatableSliceData);

  // const resourcesPageDataRes = data.prismicResourcesRepeatable.data;

  // console.log(resourcesPageDataRes);

  // const title = resourcesPageDataRes.page_title.text;

  // console.log(title);

  return (
    <ServicesPageMainStyles id="main">
      <SEO
      /* title={title}
        image={image}
        imageALT={imageALT}
        description={description} */
      />
      <section>
        <SliceZone body={servicesRepeatableSliceData} />
      </section>
    </ServicesPageMainStyles>
  );
};

export default ServicesPageTemplate;
