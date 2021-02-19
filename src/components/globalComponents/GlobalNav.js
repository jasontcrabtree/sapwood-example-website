import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  opacity: 0.99;
  padding: 40px 200px;
  padding: 40px 11.9vw 0px;
  background-color: var(--honey-100);
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  .nav-list {
    padding-bottom: 40px;
    border-bottom: 2px solid var(--dusk-pink-600);
  }

  .sapwood-wordmark-list {
    padding-left: 0px;
    margin-top: 12px;
  }

  ul {
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
    li {
      stroke: currentColor;
      padding-left: 0px;
      list-style: none;
    }
  }

  img,
  svg {
    margin-bottom: -6px;
    margin-left: 4px;
  }

  a {
    text-decoration: underline;
  }
  .nav-button {
    color: var(--turquoise-700);
    display: inline-block;
    border: none;
    margin: 0;

    background: var(--honey-100);
    -webkit-appearance: none;
  }

  .highlight {
    align-items: center;
    margin-top: 0px;
    grid-column: 1 / -1;
    display: flex;

    h4 {
      padding: 24px 40px;
    }
  }

  .primary {
    padding: 0px;
  }

  .primary-menu {
    height: fit-content;
  }

  .primary-menu {
    position: relative;
    cursor: pointer;
  }

  .primary-menu {
    width: 128px;
    width: fit-content;
  }

  .secondary-menu {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 32px;
  }

  .secondary-menu > li > a {
    /* padding: 16px 16px 16px 8px;
    padding: 32px;
    padding-left: 8px;
    width: 100%;
    padding: 24px 40px;
    width: 100%; */
  }

  .secondary-menu > li {
    /* padding: 32px; */
    /* padding-left: 8px; */
    margin-top: 0px;
    width: 100%;
  }

  .services-items > li > a,
  .resources-items > li > a,
  .contact-items > li > a {
    padding: 24px 40px;
    width: 100%;
  }

  .secondary-menu > li > h4 {
    text-decoration: none;
  }

  .secondary-menu {
    position: absolute;

    top: 8px;
    right: 0;
    left: 0;

    width: 128px;
    width: fit-content;

    visibility: hidden;
    opacity: 0;
    z-index: 1;
  }

  .secondary-menu {
    box-shadow: var(--shadow-small);
  }

  .services-menu,
  .resources-menu {
    width: fit-content;
    display: flex;
  }

  .contact-menu {
    width: 32rem;
    display: flex;
  }

  .contact-menu {
    right: 0;
    left: -12rem;
  }

  .services-items {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }

  .services-items > li,
  .resources-items > li,
  .contact-items > li {
    display: flex;
    height: auto;
    align-items: center;
    margin: 0px;
    border: 1px solid var(--grey-300);
  }

  .resources-items {
    display: grid;
    grid-template-columns: repeat(2, minmax(256px, 1fr));
  }

  .secondary-menu > li,
  .secondary-menu {
    border: 1px solid var(--grey-300);
  }

  .secondary-menu.active > li > a:hover,
  .services-items > li > a:hover,
  .resources-items > li > a:hover {
    background: var(--turquoise-900);
    color: var(--honey-200);

    a {
      color: var(--honey-200);
    }
  }

  .active .chevron {
    transform: rotate(90deg);
  }

  .primary-menu.active,
  .primary.active,
  .active {
    background: var(--honey-100);
    z-index: 10;
    opacity: 1;
  }

  .secondary-menu.active,
  .primary-menu.active {
    opacity: 1;
    cursor: pointer;
    visibility: visible;
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

function Chevron() {
  return (
    <svg
      className="chevron"
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
  );
}

function NestedLink({ id, link, label, highlighted }) {
  return (
    <li key={id} className={`${highlighted ? 'highlight' : ''}`}>
      <Link to={link}>{label}</Link>
    </li>
  );
}

function GlobalNav() {
  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);
  const dropdownRefThree = useRef(null);

  // custom hook, we pass into params of dropdownRef (the element we are maintaining with state, and false as default useState)
  const [isMenuOneActive, setIsMenuOneActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const [isMenuTwoActive, setMenuTwoState] = useDetectOutsideClick(
    dropdownRefTwo,
    false
  );

  const [isMenuThreeActive, setMenuThreeState] = useDetectOutsideClick(
    dropdownRefThree,
    false
  );

  function genericEnter(setState, isState) {
    setState(!isState);
  }

  function genericLeave(setState, isState) {
    setState(!isState);
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
                  nested_links_group_title
                }
                items {
                  highlight_menu_link
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

  const servicesLabel = globalNavRes[0].primary.primary_link_label;
  const servicesLink = globalNavRes[0].primary.primary_link_destination.url;
  const servicesItems = globalNavRes[0].items;
  const servicesNestedTitle = [
    1,
    globalNavRes[0].primary.nested_links_group_title,
  ];
  const servicesArray = Object.entries(servicesItems);
  servicesArray.splice(1, 0, servicesNestedTitle);

  console.log(servicesArray);

  const pricingLabel = globalNavRes[1].primary.primary_link_label;
  const pricingLink = globalNavRes[1].primary.primary_link_destination.url;

  const resourcesLabel = globalNavRes[2].primary.primary_link_label;
  const resourcesLink = globalNavRes[2].primary.primary_link_destination.url;
  const resourcesItems = globalNavRes[2].items;
  const resourcesNestedTitle = [
    1,
    globalNavRes[2].primary.nested_links_group_title,
  ];
  const resourcesArray = Object.entries(resourcesItems);
  resourcesArray.splice(1, 0, resourcesNestedTitle);

  const blogLabel = globalNavRes[3].primary.primary_link_label;
  const blogLink = globalNavRes[3].primary.primary_link_destination.url;

  const contactLabel = globalNavRes[4].primary.primary_link_label;
  const contactLink = globalNavRes[4].primary.primary_link_destination.url;
  const contactItems = globalNavRes[4].items;

  const aboutLabel = globalNavRes[5].primary.primary_link_label;
  const aboutLink = globalNavRes[5].primary.primary_link_destination.url;

  const legalLabel = globalNavRes[6].primary.primary_link_label;
  const legalLink = globalNavRes[6].primary.primary_link_destination.url;

  return (
    <GlobalNavStyles>
      <ul className="nav-list">
        <li className="sapwood-wordmark-list primary">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>

        <li
          ref={dropdownRef}
          className={`primary primary-menu ${
            isMenuOneActive ? 'active' : 'inactive'
          }`}
          onMouseLeave={() => genericLeave(setIsMenuOneActive, isMenuOneActive)}
          onBlur={() => genericLeave(setIsMenuOneActive, isMenuOneActive)}
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={() =>
              genericEnter(setIsMenuOneActive, isMenuOneActive)
            }
            onFocus={() => genericEnter(setIsMenuOneActive, isMenuOneActive)}
          >
            <Link to={servicesLink}>
              {servicesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button services-menu services-items ${
              isMenuOneActive ? 'active' : 'inactive'
            }`}
          >
            {/* map over nested items (in an array comprised of the prismic items + additional title section) */}
            {servicesArray.map((items) =>
              items.map((item, i) => {
                if (item.length > 2) {
                  return (
                    <li key={i} className="highlight">
                      <h4 className="serif">{item}</h4>
                    </li>
                  );
                }
                if (item.secondary_link_url) {
                  return (
                    <NestedLink
                      key={i}
                      link={item.secondary_link_url.url}
                      label={item.secondary_nested_link_label}
                      highlighted={item.highlight_menu_link ? 'highlight' : ''}
                    />
                  );
                }
                return null;
              })
            )}
          </ul>
        </li>

        <li className="primary">
          <Link to={pricingLink}>{pricingLabel}</Link>
        </li>

        <li
          ref={dropdownRefTwo}
          className={`primary primary-menu ${
            isMenuTwoActive ? 'active' : 'inactive'
          }`}
          onMouseLeave={() => genericLeave(setMenuTwoState, isMenuTwoActive)}
          onBlur={() => genericLeave(setMenuTwoState, isMenuTwoActive)}
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={() => genericEnter(setMenuTwoState, isMenuTwoActive)}
            onFocus={() => genericEnter(setMenuThreeState, isMenuThreeActive)}
          >
            <Link to={resourcesLink}>
              {resourcesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button resources-menu resources-items  ${
              isMenuTwoActive ? 'active' : 'inactive'
            }`}
          >
            {/* <ul className="resources-items"> */}
            {/* map over nested items (in an array comprised of the prismic items + additional title section) */}
            {resourcesArray.map((items) =>
              items.map((item, i) => {
                if (item.length > 1) {
                  return (
                    <li key={i} className="highlight">
                      <h4 className="serif">{item}</h4>
                    </li>
                  );
                }
                if (item.secondary_link_url) {
                  return (
                    <NestedLink
                      key={i}
                      link={item.secondary_link_url.url}
                      label={item.secondary_nested_link_label}
                      highlighted={item.highlight_menu_link ? 'highlight' : ''}
                    />
                  );
                }
                return null;
              })
            )}
            {/* </ul> */}
          </ul>
        </li>

        <li className="primary">
          <Link to={blogLink}>{blogLabel}</Link>
        </li>

        <li
          ref={dropdownRefThree}
          className={`primary primary-menu ${
            isMenuThreeActive ? 'active' : 'inactive'
          }`}
          onMouseLeave={() =>
            genericLeave(setMenuThreeState, isMenuThreeActive)
          }
          onBlur={() => genericLeave(setMenuThreeState, isMenuThreeActive)}
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={() =>
              genericEnter(setMenuThreeState, isMenuThreeActive)
            }
            onFocus={() => genericEnter(setMenuThreeState, isMenuThreeActive)}
          >
            <Link to={contactLink}>
              {contactLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button contact-menu contact-items
            ${isMenuThreeActive ? 'active' : 'inactive'}`}
          >
            {contactItems.map((item, id) => (
              <NestedLink
                key={id}
                link={item.secondary_link_url.url}
                label={item.secondary_nested_link_label}
              />
            ))}
          </ul>
        </li>

        <li className="primary">
          <Link to={aboutLink}>{aboutLabel}</Link>
        </li>

        <li className="primary">
          <Link to={legalLink}>{legalLabel}</Link>
        </li>
      </ul>
    </GlobalNavStyles>
  );
}

export default GlobalNav;
