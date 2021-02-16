import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw;
  background-color: var(--honey-100);
  opacity: 0.96;

  height: 480px;

  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  /* border-bottom: 2px solid var(--dusk-pink-600); */

  .sapwood-wordmark-list {
    padding-left: 0px;
    margin-top: 12px;
  }

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

  ul > li > ul > li > a {
    padding: 8px 8px 8px 0px;
    outline: 1px solid var(--grey-300);
  }

  li {
    line-height: 32px;
    flex-shrink: 0;
  }

  li {
    stroke: currentColor;
  }

  .secondary-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 32px;
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

  .nav-button {
    color: var(--turquoise-700);
    text-decoration: underline;
    display: inline-block;
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
    -webkit-appearance: none;
  }

  .menu-container {
    /* outline: 1px solid red; */
  }

  .menu-container {
    height: fit-content;

    border: 1px solid orange;
  }

  /*
  Menu Tutorial CSS
  */
  .menu-container {
    position: relative;
    cursor: pointer;
  }

  .menu {
    position: absolute;
    top: 96px;
    right: 0;
    left: 0;
    width: 240px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    /* transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s; */
  }

  .menu.active {
    opacity: 1;
    cursor: pointer;
    visibility: visible;
    /* transform: translateY(0); */
  }

  .menu-trigger {
    /* transition: box-shadow 0.4s ease; */
  }

  @media screen and (min-width: 960px) {
    .primary:first-child {
      flex-basis: 264px;
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
  const dropdownRef = useRef(null);
  // custom hook, we pass into params of dropdownRef (the element we are maintaining with state, and false as default useState)
  const [isMenuActive, setIsMenuActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  function onEnter() {
    setIsMenuActive(!isMenuActive);
  }

  function onLeave() {
    setIsMenuActive(isMenuActive);
  }

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
          <li
            ref={dropdownRef}
            key={i}
            className="primary menu-container"

            // onMouseLeave={onLeave}
          >
            {nav.items.length ? (
              <button
                className="menu-trigger nav-button"
                type="button"
                onMouseEnter={onEnter}
              >
                <Link
                /* to={nav.primary.primary_link_destination.url} */
                >
                  {nav.primary.primary_link_label}
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
                </Link>
              </button>
            ) : (
              <Link to={nav.primary.primary_link_destination.url}>
                {nav.primary.primary_link_label}
              </Link>
            )}
            {nav.items.length ? (
              <ul
                className={`secondary-list nav-button menu ${
                  isMenuActive ? 'active' : 'inactive'
                }`}
              >
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
