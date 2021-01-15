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

const HeroHeader = styled.h1`
  font-weight: 400;
  letter-spacing: -0.4px;

  display: flex;
`;

const HomePageContainerStyles = styled.main`
  * {
    grid-column: 1 / 8;
  }
`;

const index = (props) => {
  if (!props) return null;

  // DATA QUERY
  const homePageData = props.data.prismicHomePage.data;

  // CONTENT
  const mainTitle = homePageData.homepage_title.text;
  const mainText = homePageData.homepage_paragraph.html;

  return (
    <HomePageContainerStyles id="main">
      <SEO />
      <HeroHeader>{mainTitle}</HeroHeader>
      <HTMLRenderer html={mainText} />
    </HomePageContainerStyles>
  );
};

export default index;
