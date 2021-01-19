import React from 'react';

function HeroTitleBlockOne(props) {
  const { title } = props;
  return <h1 className="h1-hero h1-hero-v1">{title}</h1>;
}

export default HeroTitleBlockOne;
