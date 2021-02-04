import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';

import SEO from '../components/globalComponents/SEO';
import ImageWrapper from '../components/ImageWrapper';
import TitleBlock from '../components/titles/TitleBlock';

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
  const mainTitle = homePageData.homepage_title.text;
  const mainText = homePageData.homepage_paragraph.html;

  return (
    <HomePageContainerStyles id="main">
      <SEO />
      {/* <HeroHeader>{mainTitle}</HeroHeader> */}
      <section>
        <TitleBlock
          hero
          titleAlignment
          headingSize="h1"
          titleText="H1 Hero Centered Title Text"
          titleStyle="HeroTitleBlockOne"
        />
        <hr />
        <TitleBlock
          hero
          titleAlignment
          headingSize="h1"
          titleText="H1 Hero Centered Title Text"
          titleStyle="HeroTitleBlockTwo"
        />
        <hr />
        <TitleBlock
          hero
          titleAlignment
          headingSize="h1"
          titleText="H1 Hero Centered Title Text"
          titleStyle="HeroTitleBlockThree"
        />
        <hr />
        <TitleBlock
          hero
          titleAlignment
          headingSize="h1"
          titleText="H1 Hero Centered Title Text"
          titleStyle="HeroTitleBlockFour"
        />
      </section>

      <section>
        <TitleBlock
          headingSize="h3"
          titleText="H1 Hero Centered Title Text"
          titleStyle="TitleBlockOne"
        />
        <hr />
        <TitleBlock
          headingSize="h3"
          titleText="H1 Hero Centered Title Text"
          titleStyle="TitleBlockTwo"
        />
        <hr />
        <TitleBlock
          headingSize="h3"
          titleText="H1 Hero Centered Title Text"
          titleStyle="TitleBlockThree"
        />
        <hr />
        <TitleBlock
          serifStyle
          headingSize="h3"
          titleText="H1 Hero Centered Title Text"
          titleStyle="TitleBlockFour"
        />
      </section>
      {/* <HTMLRenderer html={mainText} /> */}
    </HomePageContainerStyles>
  );
};

export default index;
