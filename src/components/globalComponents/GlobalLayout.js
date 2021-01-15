import React from 'react';
import cssVars from 'css-vars-ponyfill';

import '../../styles/globalStyles/reset.css';
import '../../styles/globalStyles/globalTheme.css';
import '../../styles/globalStyles/globalStyles.css';
import '../../styles/globalStyles/globalType.css';

import GlobalFooter from './GlobalFooter';
import GlobalNav from './GlobalNav';
import SEO from './SEO';
import SkipLink from './SkipLink';

cssVars({
  include: 'style',
  onlyLegacy: false,
  watch: true,
  // variables: {
  //   '--link-700': 'rgb(6, 129, 151)',
  // },
});

const GlobalLayout = (props) => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <>
      <SEO image={image} title={title} location={location.pathname} />
      <SkipLink />
      <GlobalNav />
      <>{children}</>
      <GlobalFooter />
    </>
  );
};

export default GlobalLayout;
