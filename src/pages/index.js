import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';

import SEO from '../components/globalComponents/SEO';
import ImageWrapper from '../components/ImageWrapper';

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

const HeroHeader = styled.h1``;

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
      {/* <HeroHeader>{mainTitle}</HeroHeader> */}
      <section>
        <ImageWrapper
          imageStyle="OneTopRight"
          imageAlt="Hundreds of people gather and sit around a sunny riverway during a summers day in Paris, France."
          imageCredit="Image via Brooke"
          imageSource="https://images.unsplash.com/photo-1611677233318-de54d11b189e"
          imageSourceLink="https://unsplash.com/photos/a3Dyzxrmnss"
          imageBlockColourStyle="var(--dusk-pink-500)"
        />
      </section>
      {/* <HTMLRenderer html={mainText} /> */}
    </HomePageContainerStyles>
  );
};

export default index;
