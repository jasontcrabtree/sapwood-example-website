import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const List = styled.li``;

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw;
  background-color: var(--honey-100);
  opacity: 1;

  /* height: 480px; */

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

  li {
    /* line-height: 32px; */
    /* flex-shrink: 0; */
  }

  ul > li {
    /* outline: 1px solid red; */
  }

  li {
    stroke: currentColor;
  }

  .secondary-list {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 32px;
  }

  .secondary-list > li > a {
    padding: 16px 16px 16px 8px;

    padding: 32px;
    padding-left: 8px;
    width: 100%;
  }

  .secondary-list > li {
    padding: 32px;
    padding-left: 8px;
    margin-top: 0px;
    width: 100%;
  }

  .secondary-list > li {
    outline: 1px solid var(--grey-300);
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

    background: var(--honey-100);
    -webkit-appearance: none;
  }

  .primary {
    padding: 0px;
  }

  .menu-container {
    height: fit-content;
    /* background: lightblue;
    border: 1px solid orange; */

    /* z-index: 1; */
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
    top: 72;
    right: 0;
    left: 0;
    /* margin-top: 32px; */
    /* padding-top: 40px; */
    width: 128px;
    width: fit-content;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    /* transform: translateY(-20px); */
  }

  .menu.active,
  .menu-container.active,
  .primary.active,
  .active {
    background: var(--honey-100);
    z-index: 10;
    opacity: 1;
  }

  .menu-container {
    width: 128px;
    width: fit-content;
  }

  .secondary-list {
    width: 32rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }

  .secondary-list.active > li > a:hover {
    background: var(--turquoise-900);
    color: var(--honey-200);

    a {
      color: var(--honey-200);
    }
  }

  .secondary-list.active > li:hover {
    background: var(--turquoise-900);
    color: var(--honey-200);

    a {
      color: var(--honey-200);
    }
  }

  .secondary-list > li {
    /* padding-top: 24px;
    padding-bottom: 24px; */
    opacity: 1;
  }

  .menu-container.active {
    /* height: fit-content; */
    /* width: 128px; */
    /* width: fit-content; */
    /* width: auto; */
    opacity: 1;
  }

  .menu.active {
    opacity: 1;
    cursor: pointer;
    visibility: visible;
    /* transform: translateY(0); */
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

function NestedLink({ id, link, label }) {
  return (
    <li key={id}>
      <Link to={link}>{label}</Link>
    </li>
  );
}

function PrimaryLinkSingleLink({ link, label }) {
  return <Link to={link}>{label}</Link>;
}

function PrimaryWithNestedLink(onEnter, { link, label }) {
  console.log(link);

  return (
    <button className="" type="button" onMouseEnter={onEnter}>
      <Link to={link}>
        {label}
        <Chevron />
      </Link>
    </button>
  );
}

function GlobalNav() {
  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);
  const dropdownRefThree = useRef(null);

  // custom hook, we pass into params of dropdownRef (the element we are maintaining with state, and false as default useState)
  const [isMenuActive, setIsMenuActive] = useDetectOutsideClick(
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

  function onEnter() {
    setIsMenuActive(!isMenuActive);
  }
  function onLeave() {
    setIsMenuActive(!isMenuActive);
  }

  function onEnterTwo() {
    setMenuTwoState(!isMenuTwoActive);
  }

  function onLeaveTwo() {
    setMenuTwoState(!isMenuTwoActive);
  }

  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        if (isMenuActive) {
          onLeave();
        }

        if (isMenuTwoActive) {
          onLeaveTwo();
        }
      }
    }

    window.addEventListener('keyup', keyListener);
    return () => window.removeEventListener('keyup', keyListener);
  });

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
  const servicesLabel = globalNavRes[0].primary.primary_link_label;
  const servicesLink = globalNavRes[0].primary.primary_link_destination.url;
  const servicesItems = globalNavRes[0].items;

  const pricingLabel = globalNavRes[1].primary.primary_link_label;
  const pricingLink = globalNavRes[1].primary.primary_link_destination.url;

  const resourcesLabel = globalNavRes[2].primary.primary_link_label;
  const resourcesLink = globalNavRes[2].primary.primary_link_destination.url;
  const resourcesItems = globalNavRes[2].items;

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
      <ul>
        <li className="sapwood-wordmark-list primary">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>

        <li
          ref={dropdownRef}
          className="primary menu-container"
          onMouseLeave={onLeave}
        >
          <button className="nav-button" type="button" onMouseEnter={onEnter}>
            <Link to={servicesLink}>
              {servicesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-list nav-button menu ${
              isMenuActive ? 'active' : 'inactive'
            }`}
          >
            {/* map over nested items */}
            {servicesItems.map((item, id) => (
              <NestedLink
                key={id}
                link={item.secondary_link_url.url}
                label={item.secondary_nested_link_label}
              />
            ))}
          </ul>
        </li>

        <li className="primary">
          <Link to={pricingLink}>{pricingLabel}</Link>
        </li>

        <li
          ref={dropdownRefTwo}
          className={`primary menu-container ${
            isMenuTwoActive ? 'active' : 'inactive'
          }`}
          onMouseLeave={onLeaveTwo}
          onBlur={onLeaveTwo}
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={onEnterTwo}
            onFocus={onEnterTwo}
          >
            <Link to={resourcesLink}>
              {resourcesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-list nav-button menu ${
              isMenuTwoActive ? 'active' : 'inactive'
            }`}
          >
            {/* map over nested items */}
            {resourcesItems.map((item, id) => (
              <NestedLink
                key={id}
                link={item.secondary_link_url.url}
                label={item.secondary_nested_link_label}
              />
            ))}
          </ul>
        </li>

        <li className="primary">
          <Link to={blogLink}>{blogLabel}</Link>
        </li>

        <li
          ref={dropdownRefThree}
          className={`primary menu-container ${
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
            className={`secondary-list nav-button menu ${
              isMenuThreeActive ? 'active' : 'inactive'
            }`}
          >
            {/* map over nested items */}
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
