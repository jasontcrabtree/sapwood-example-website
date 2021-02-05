import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';
import SEO from '../components/globalComponents/SEO';

export const homePageQuery = graphql`
  query homePageQuery {
    prismicHomePage {
      data {
        homepage_title {
          text
        }
        homepage_paragraph {
          html
        }
      }
    }
  }
`;

const HomePageContainerStyles = styled.main`
  * {
    grid-column: 1 / -1;
  }

  section {
    border: 1px solid var(--dusk-pink-500);
  }
`;

const index = (props) => {
  if (!props) return null;

  // DATA QUERY
  const homePageData = props.data.prismicHomePage.data;

  // CONTENT
  const mainText = homePageData.homepage_paragraph.html;

  return (
    <HomePageContainerStyles id="main">
      <SEO />
      <HTMLRenderer html={mainText} />
    </HomePageContainerStyles>
  );
};

export default index;
