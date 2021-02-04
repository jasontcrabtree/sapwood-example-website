import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';

import SEO from '../components/globalComponents/SEO';
import ImageWrapper from '../components/ImageWrapper';
import TitleBlock from '../components/titles/TitleBlock';
import ColumnTextSection from '../components/textSections/TextColumns';

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
        <ColumnTextSection
          columnOne="Paying down debt and long-term interest loans in a managed, deliberate
        way that lets you work towards long-term goals while minimizing fees and
        ensuring you can meet your weekly needs."
          columnTwo="Setting short, medium and long-term goals to work towards — whether
        that’s paying off a loan, saving for a holiday, getting a new bike for
        your kids, or saving for your first home or retirement."
          columnThree="Working towards long-term financial security for yourself, your family
        and loved ones through making financial investments with different
        levels of managed risk and time horizons."
        />
      </section>

      {/* <HTMLRenderer html={mainText} /> */}
    </HomePageContainerStyles>
  );
};

export default index;
