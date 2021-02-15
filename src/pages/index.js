import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';
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
  * {
    grid-column: 1 / -1;
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
      <section>
        {tempAllSitePage.map((pages, i) => (
          <div key={i}>
            <Link to={pages.path}>{pages.path}</Link>
          </div>
        ))}
      </section>
    </HomePageContainerStyles>
  );
}

export default index;
