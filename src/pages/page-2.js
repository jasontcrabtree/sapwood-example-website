import React from 'react';

import SEO from '../components/globalComponents/SEO';

const PageTwo = (props) => {
  if (!props) return null;

  return (
    <main id="main">
      <SEO />
      <h1>Welcome to page two!</h1>
      <p>This is the page two content.</p>
    </main>
  );
};

export default PageTwo;
