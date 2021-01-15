import React from 'react';
import SEO from '../components/globalComponents/SEO';

const PageNotFound = (props) => {
  if (!props) return null;

  return (
    <main id="main">
      <SEO />
      <h1>404 Page</h1>
      <p>Missing page</p>
    </main>
  );
};

export default PageNotFound;
