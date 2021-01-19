import React from 'react';
import styled from 'styled-components';

const GlobalFooterStyles = styled.nav`
  padding: 64px 200px 112px;
  background-color: var(--dusk-pink-100);

  ul {
    display: flex;
    padding-inline-start: 0px;
  }

  ul > li {
    margin-right: 48px;
  }

  ul {
    li {
      list-style: none;
      max-width: 32ch;
    }
  }
`;

const GlobalFooter = () => (
  <GlobalFooterStyles>
    <ul>
      <li className="p-small">
        © Copyright 2021 <a href="https://lodestone.studio">Lodestone Studio</a>
        . All rights reserved.
      </li>
    </ul>
  </GlobalFooterStyles>
);

export default GlobalFooter;
