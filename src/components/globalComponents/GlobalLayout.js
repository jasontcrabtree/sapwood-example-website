import React from 'react';
import cssVars from 'css-vars-ponyfill';

import '../../styles/globalStyles/reset.css';
import '../../styles/globalStyles/globalTheme.css';
import '../../styles/globalStyles/globalStyles.css';
import '../../styles/globalStyles/globalType.css';

import styled from 'styled-components';
import GlobalFooter from './GlobalFooter';
import GlobalNav from './GlobalNav';
import SEO from './SEO';
// import SkipLink from './SkipLink';

cssVars({
  include: 'style',
  onlyLegacy: true,
  watch: true,
  // variables: {
  //   '--link-700': 'rgb(6, 129, 151)',
  // },
});

const GlobalLayoutStyles = styled.div`
  main {
    /* Global Content Margin 9.6vw === 160px */
    margin: 0px 9.6vw 0px;

    /* Inner grid padding */
    padding: 40px 40px 400px 40px;

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: 24px;

    /* Working styles */
    border-left: 1px solid var(--dusk-pink-500);
    border-right: 1px solid var(--dusk-pink-500);
  }
`;

const GlobalLayout = (props) => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <GlobalLayoutStyles>
      <SEO image={image} title={title} location={location.pathname} />
      {/* <SkipLink /> */}
      <GlobalNav />
      <>{children}</>
      <GlobalFooter />
    </GlobalLayoutStyles>
  );
};

export default GlobalLayout;
