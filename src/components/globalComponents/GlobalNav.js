import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw;
  background-color: var(--honey-100);
  opacity: 0.96;

  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  /* position: sticky;
  top: 0; */

  ul {
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
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
