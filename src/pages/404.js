import React from 'react';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';

const PageNoutFoundStyles = styled.main`
  * {
    grid-column: 1 / -1;
  }
`;

const PageNotFound = (props) => {
  if (!props) return null;

  return (
    <PageNoutFoundStyles id="main">
      <SEO />
      <h1>404 Page</h1>
      <p>Missing page</p>
    </PageNoutFoundStyles>
  );
};

export default PageNotFound;
