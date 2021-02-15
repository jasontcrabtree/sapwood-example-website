import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ChevronRight from '../../../static/chevron-right.svg';

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw;
  background-color: var(--honey-100);
  opacity: 0.96;

  height: 400px;

  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  /* border-bottom: 2px solid var(--dusk-pink-600); */

  /*  ::after {
    content: '';
    background: var(--green-300);
    position: absolute;
    bottom: 0;
    left: 9.6%;
    right: 9.6%;
    top: 124px;
    width: 80.8%;
    height: 2px;
  } */

  /* position: sticky;
  top: 0; */

  ul {
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
  }

  ul {
    /* outline: 1px solid red; */
  }

  li {
    /* outline: 1px solid blue; */
  }

  ul > li {
    /* margin-right: 48px; */
  }

  li {
    /* width: 200px; */
    flex-grow: 1;
    outline: 1px solid red;
  }

  ul:first-of-type > li:first-child {
    flex-basis: 20%;
  }

  ul > li > ul > li {
    margin-top: 0px;
    margin-left: 0px;
    padding-left: 0px;
  }

  ul > li > ul > li {
    /* background: var(--turquoise-900); */
    /* outline: 1px solid var(--grey-500); */
    display: flex;
    /* box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.5); */
  }

  ul > li > ul > li > a {
    /* padding: 24px 16px; */
    /* width: 112px; */
  }

  li > ul > li > a {
    /* color: var(--honey-400); */
  }

  ul > li > ul {
    /* visibility: hidden; */
    /* width: 0px; */
  }

  ul > li > ul {
    display: grid;
    margin: 0px;
    /* width: 400px; */

    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
    /* grid-template-columns: repeat(3, 1fr); */
  }

  li {
    line-height: 32px;
  }

  img {
    margin-bottom: -4px;
    margin-left: 4px;
  }

  ul > li > ul {
    /* display: none; */
  }

  ul > li > ul:hover {
    /* display: block; */
    /* outline: 2px solid red !important; */
  }

  ul {
    li {
      list-style: none;
    }
  }

  .sapwood-wordmark-list {
    padding-left: 0px;
    margin-top: 12px;
    width: 242px;
  }

  @media screen and (max-width: 920px) {
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
        <li className="sapwood-wordmark-list">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>
        {globalNavRes.map((nav, i) => (
          <li key={i}>
            <Link to={nav.primary.primary_link_destination.url}>
              {nav.primary.primary_link_label}
            </Link>
            {nav.items.length ? (
              <img
                src={ChevronRight}
                className="chevron"
                alt="Chevron Pointing Right"
              />
            ) : null}
            {nav.items.length ? (
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
        <li>
          <Link to="/components">Components</Link>
        </li>
      </ul>
    </GlobalNavStyles>
  );
}

export default GlobalNav;
