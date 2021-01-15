/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import GlobalLayout from './src/components/globalComponents/GlobalLayout';

export function wrapPageElement({ element, props, data }) {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
}
