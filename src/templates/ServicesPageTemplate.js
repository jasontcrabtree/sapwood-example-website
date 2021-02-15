import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import SliceZone from '../components/globalComponents/SliceZone';

export const servicesPageQuery = graphql`
  query servicesRepeatablePage($uid: String) {
    prismicServicesRepeatable(uid: { eq: $uid }) {
      uid
      url
      data {
        body {
          ... on PrismicServicesRepeatableBodyPageTitleBlock {
            id
            slice_type
            primary {
              main_page_title
              heading_size
              title_style
              text_alignment
            }
          }
          ... on PrismicServicesRepeatableBodyContentBlock {
            id
            slice_type
            primary {
              title_style
              text_content {
                html
              }
              section_title {
                text
              }
              image_source_link {
                url
              }
              image_source
              image_content {
                url
                alt
              }
              image_block_colour_style
              image_block_colour_position
              heading_size
              content_order
            }
          }
          ... on PrismicServicesRepeatableBodyColumnTextBlock {
            id
            slice_type
            primary {
              title_style
              section_title {
                text
              }
              heading_size
              column_background_style
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
          ... on PrismicServicesRepeatableBodyCardGridBlock {
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
          }
          ... on PrismicServicesRepeatableBodyImageBlock {
            id
            slice_type
            primary {
              image_source_link {
                url
              }
              image_source
              image_block_colour_position
              image_block_colour_style
              image {
                alt
                url
              }
            }
          }
        }
      }
    }
  }
`;

const ServicesPageMainStyles = styled.main`
  section {
    display: grid;
    grid-column: 1 / -1;
    justify-content: center;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 96px; */
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

const ServicesPageTemplate = (props) => {
  if (!props) return <h1>No props</h1>;
  const { data } = props;

  // console.log(data);

  const servicesRepeatableSliceData = data.prismicServicesRepeatable.data.body;

  // console.log(servicesRepeatableSliceData);

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
