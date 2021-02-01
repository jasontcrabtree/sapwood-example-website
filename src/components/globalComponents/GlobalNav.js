import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
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

  .sapwood-wordmark-list {
    padding-left: 0px;
    margin-top: 12px;
  }

  .test-list {
    outline: 1px solid var(--dusk-pink-300);
    list-style-type: none;
    margin: 0px;
    padding: 0px;

    margin-top: 2rem;

    li {
      display: flex;
      flex-direction: row;
      margin: 0px;
      padding: 0px;
    }

    li + * {
      margin-left: 72px;
    }
  }
`;

const GlobalNav = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicGlobalNavigation {
        edges {
          node {
            data {
              main_pages_nav_links {
                page_nav_label
                page_nav_link {
                  uid
                  id
                  slug
                  url
                }
              }
              home_page_nav_link {
                url
              }
              home_page_nav_label {
                text
              }
            }
          }
        }
      }
    }
  `);

  const globalNavRes =
    data.allPrismicGlobalNavigation.edges[0].node.data.main_pages_nav_links;

  return (
    <GlobalNavStyles>
      <ul>
        <li className="sapwood-wordmark-list">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
      </ul>
      <ul className="test-list">
        {globalNavRes.map((navItem) => (
          <li key={navItem.page_nav_link.id}>
            <Link to={navItem.page_nav_link.url}>{navItem.page_nav_label}</Link>
          </li>
        ))}
      </ul>
    </GlobalNavStyles>
  );
};

export default GlobalNav;
