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
import SkipLink from './SkipLink';

cssVars({
  include: 'style',
  onlyLegacy: true,
  watch: true,
  // variables: {
  //   '--link-700': 'rgb(6, 129, 151)',
  // },
});

const GlobalLayoutStyles = styled.div`
  border: 1px solid var(--green-600);

  margin: 80px 160px;

  main {
    display: grid;
    padding: 40px;
    margin: 40px;
    grid-gap: 24px;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    border: 1px solid var(--dusk-pink-500);
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
