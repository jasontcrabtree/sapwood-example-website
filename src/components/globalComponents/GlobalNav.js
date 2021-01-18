import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const GlobalNavStyles = styled.nav`
  padding: 40px 200px;
  background-color: var(--honey-200);

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
    }
  }
`;

const GlobalNav = () => (
  <GlobalNavStyles>
    <ul>
      <li>
        <Link to="/" className="sapwood-wordmark">
          Sapwood Financial Advisors
        </Link>
      </li>
      <li>
        <Link to="/components">Components</Link>
      </li>
    </ul>
  </GlobalNavStyles>
);

export default GlobalNav;
