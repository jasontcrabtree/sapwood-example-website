import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw;
  background-color: var(--honey-100);
  opacity: 0.96;

  /* height: 400px; */

  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  /* border-bottom: 2px solid var(--dusk-pink-600); */

  ul {
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
  }

  li {
    /* outline: 1px solid var(--grey-200); */
  }

  li {
    padding-left: 0px;
  }

  li > a {
    padding: 8px 4px 8px 8px;
  }

  li {
    line-height: 32px;
    flex-shrink: 0;
  }

  li {
    stroke: currentColor;
  }

  ul > li > ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }

  ul {
    li {
      list-style: none;
    }
  }

  img,
  svg {
    margin-bottom: -6px;
    margin-left: 4px;
  }

  .sapwood-wordmark-list {
    padding-left: 0px;
    margin-top: 12px;
    /* width: 242px; */
  }

  @media screen and (min-width: 960px) {
    .primary:first-child {
      flex-basis: 19.4%;
      flex-shrink: 1;

      a {
        padding: 0px 0px;
      }
    }

    .primary:nth-child(-n + 4) + * {
      margin-left: 48px;
      margin-left: 2.8vw;
    }

    .primary:nth-child(n + 6):nth-child(-n + 8) + * {
      margin-left: 24px;
      margin-left: 1.4vw;
    }

    .primary:nth-child(n + 6) {
      margin-left: auto;
      padding-left: 8px;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 24px;
    ul {
      display: flex;
      flex-direction: column;
      li {
        flex-direction: column;
      }
    }
  }
`;

function GlobalNav() {
  const data = useStaticQuery(graphql`
    {
      allPrismicGlobalNavigation {
        nodes {
          data {
            nav {
              ... on PrismicGlobalNavigationNavNavItem {
                id
                slice_label
                primary {
                  primary_link_label
                  primary_link_destination {
                    url
                  }
                }
                items {
                  secondary_nested_link_label
                  secondary_link_url {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const globalNavRes = data.allPrismicGlobalNavigation.nodes[0].data.nav;

  return (
    <GlobalNavStyles>
      <ul>
        <li className="sapwood-wordmark-list primary">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>
        {globalNavRes.map((nav, i) => (
          <li key={i} className="primary">
            <Link to={nav.primary.primary_link_destination.url}>
              {nav.primary.primary_link_label}
              {nav.items.length ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentcolor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </Link>
            {!nav.items.length ? (
              <ul className="secondary">
                {nav.items.map((item, id) => (
                  <li key={id}>
                    <Link to={item.secondary_link_url.url}>
                      {item.secondary_nested_link_label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </GlobalNavStyles>
  );
}

export default GlobalNav;
