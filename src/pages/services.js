import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';
import SEO from '../components/globalComponents/SEO';

// export const singlePageQuery = graphql``;

const SinglePageContainerStyles = styled.main`
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

  section {
    border: 1px solid var(--dusk-pink-500);
  }
`;

const index = (props) => {
  if (!props) return null;

  return (
    <SinglePageContainerStyles id="main">
      <SEO />
      <h1>Hello</h1>
    </SinglePageContainerStyles>
  );
};

export default index;
