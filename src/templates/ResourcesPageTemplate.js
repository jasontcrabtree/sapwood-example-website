import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import SliceZone from '../components/globalComponents/SliceZone';

export const resourcesPageQuery = graphql`
  query resourcesRepeatablePage($uid: String) {
    prismicResourcesRepeatable(uid: { eq: $uid }) {
      uid
      data {
        body {
          ... on PrismicResourcesRepeatableBodyPageTitleBlock {
            id
            slice_type
            primary {
              title_style
              text_alignment
              main_page_title
              heading_size
            }
          }
          ... on PrismicResourcesRepeatableBodyCardGridBlock {
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
              content_author
              card_link_destination {
                url
              }
              card_image {
                alt
                url
              }
              card_title {
                text
              }
            }
          }
        }
      }
    }
  }
`;

const ResourcesPageMainStyles = styled.main`
  section {
    display: grid;
    grid-column: 1 / -1;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 96px; */
  }

  section > * + * {
    margin-top: 96px;
  }

  section > * {
    width: 100%;
    /* max-width: 100%; */
    /* margin-left: auto;
    margin-right: auto; */
  }

  section > * + * {
    margin-top: 96px;
  }

  section > figure {
    margin-top: 96px;
  }
`;

const ResourcesPageTemplate = (props) => {
  const { data } = props;

  const resourcesPageDataRes = data.prismicResourcesRepeatable.data.body;

  console.log(resourcesPageDataRes);

  // console.log(resourcesPageDataRes);

  // const title = resourcesPageDataRes.page_title.text;

  // console.log(title);

  return (
    <ResourcesPageMainStyles id="main">
      <SEO
      /* title={title}
        image={image}
        imageALT={imageALT}
        description={description} */
      />
      <section>
        <SliceZone body={resourcesPageDataRes} />
      </section>
    </ResourcesPageMainStyles>
  );
};

export default ResourcesPageTemplate;
