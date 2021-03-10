import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import SliceZone from '../components/globalComponents/SliceZone';

export const homePageQuery = graphql`
  query homePageQuery {
    prismicHomePage {
      data {
        body {
          ... on PrismicHomePageBodyPageTitleBlock {
            id
            slice_type
            primary {
              main_page_title
              heading_size
              text_alignment
              title_style
            }
          }
          ... on PrismicHomePageBodyContentBlock {
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
                alt
                url
              }
              image_block_colour_style
              image_block_colour_position
              heading_size
              content_order
            }
          }
          ... on PrismicHomePageBodyCardGridBlock {
            id
          }
          ... on PrismicHomePageBodyColumnTextBlock {
            id
            slice_type
            slice_label
            items {
              column_item_title {
                text
              }
              column_text_content {
                html
              }
            }
            primary {
              column_background_style
              heading_size
              title_style
              section_title {
                text
              }
            }
          }
          ... on PrismicHomePageBodyCustomBlock {
            id
            slice_type
            slice_label
            primary {
              custom_component_name
              title_style
              text_alignment
              heading_size
              section_title {
                html
              }
            }
          }
          ... on PrismicHomePageBodyImageBlock {
            id
            slice_type
            slice_label
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
          ... on PrismicHomePageBodyDividerLine {
            id
            slice_type
            primary {
              divider_visual_style
              divider_colour
            }
          }
        }
      }
    }
    allSitePage {
      totalCount
      nodes {
        path
      }
    }
  }
`;

const HomePageContainerStyles = styled.main`
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
`;

function index(props) {
  if (!props) return null;

  const res = props.data;

  const homeSliceZone = res.prismicHomePage.data.body;

  const tempAllSitePage = res.allSitePage.nodes;

  return (
    <HomePageContainerStyles id="main">
      <SEO />
      <section>
        <SliceZone body={homeSliceZone} />
      </section>
      {/* <section>
        {tempAllSitePage.map((pages, i) => (
          <div key={i}>
            <Link to={pages.path}>{pages.path}</Link>
          </div>
        ))}
      </section> */}
    </HomePageContainerStyles>
  );
}

export default index;
