import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const List = styled.li``;

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  padding: 40px 200px;
  padding: 40px 11.9vw 0px;
  background-color: var(--honey-100);
  opacity: 1;

  /* height: 480px; */

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
  }

  li {
    /* outline: 1px solid var(--grey-200); */
  }

  li {
    padding-left: 0px;
  }

  li > a {
    /* padding: 8px 4px 8px 8px; */
  }

  li {
    /* line-height: 32px; */
    /* flex-shrink: 0; */
  }

  li {
    stroke: currentColor;
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
    padding: 16px 16px 16px 8px;

    padding: 32px;
    padding-left: 8px;
    width: 100%;
  }

  .secondary-menu > li {
    padding: 32px;
    padding-left: 8px;
    margin-top: 0px;
    width: 100%;
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

  .secondary-menu > li > h4 {
    text-decoration: none !important;
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

  .contact-menu {
    right: 0;
    left: -400%;
  }

  .menu.active,
  .primary-menu.active,
  .primary.active,
  .active {
    background: var(--honey-100);
    z-index: 10;
    opacity: 1;
  }

  .primary-menu {
    width: 128px;
    width: fit-content;
  }

  .item {
    padding: 24px 40px;
  }

  .services-menu {
    width: fit-content;
    display: flex;

    box-shadow: var(--shadow-small);
  }

  .resources-menu {
    width: fit-content;
    display: flex;
  }

  .contact-menu {
    width: 30rem;
  }

  .individual-services-title {
    align-items: center;
    margin-top: 0px;
    padding: 8px 32px;
  }

  .services-items {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }

  .services-items > li {
    display: flex;
    height: auto;
    justify-content: center;
    margin: 0px;
    border: 1px solid var(--grey-300);
  }

  .services-items > li > a {
    padding: 24px 40px;
    width: 100%;
  }

  .resources-items {
    display: grid;
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }

  .resources-items > li {
    display: flex;
    height: auto;
    justify-content: center;
    margin: 0px;
    border: 1px solid var(--grey-300);
  }

  .resources-items > li > a {
    padding: 24px 40px;
    width: 100%;
  }

  .highlight {
    align-items: center;
    margin-top: 0px;
    padding: 8px 32px;
    grid-column: span 2;
    display: flex;
    font-weight: bold;
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

  .secondary-menu > li {
    /* padding-top: 24px;
    padding-bottom: 24px; */
    /* opacity: 1; */
  }

  /* .primary-menu.active {
    opacity: 1;
  } */

  .active .chevron {
    transform: rotate(90deg);
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

  const pricingLabel = globalNavRes[1].primary.primary_link_label;
  const pricingLink = globalNavRes[1].primary.primary_link_destination.url;

  const resourcesLabel = globalNavRes[2].primary.primary_link_label;
  const resourcesLink = globalNavRes[2].primary.primary_link_destination.url;
  const resourcesItems = globalNavRes[2].items;
  const resourcesNestedTitle = globalNavRes[2].primary.nested_links_group_title;

  // resourcesItems.push(resourcesNestedTitle);

  console.log(resourcesItems);

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
            className={`secondary-menu nav-button menu services-menu ${
              isMenuOneActive ? 'active' : 'inactive'
            }`}
          >
            <li className="item">All packages and services</li>
            <li>
              <h4 className="serif individual-services-title">
                Individual Services
              </h4>
            </li>
            {/* map over nested items */}
            <ul className="services-items">
              {servicesItems.map((item, id) => (
                <NestedLink
                  key={id}
                  link={item.secondary_link_url.url}
                  label={item.secondary_nested_link_label}
                />
              ))}
            </ul>
            <li className="item">When to see a financial advisor</li>
            <li className="item">What don't financial advisors do?</li>
          </ul>
        </li>

        <li className="primary">
          <Link to={pricingLink}>{pricingLabel}</Link>
        </li>

        <li
          ref={dropdownRefTwo}
          className={`primary primary-menu active ${
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
            className={`secondary-menu nav-button menu resources-menu ${
              isMenuTwoActive ? 'active' : 'inactive'
            }`}
          >
            {/* <li>
              Calculators — A collection of free to use, no-sign up required
              personal finance calculators
            </li> */}
            {/* <li>
              <h4 className="serif">Sapwood Resources</h4>
            </li> */}
            <ul className="resources-items">
              <li className="highlight">
                <h4 className="serif">{resourcesNestedTitle}</h4>
              </li>
              {/* map over nested items */}
              {resourcesItems.map((item, id) => {
                console.log(item);
                // if (item !== item.secondary_link_url.url) {
                //   return (
                //     <div>
                //       <p>hello</p>
                //     </div>
                //   );
                // }
                if (item.secondary_link_url.url) {
                  return (
                    <NestedLink
                      key={id}
                      link={item.secondary_link_url.url}
                      label={item.secondary_nested_link_label}
                      highlighted={item.highlight_menu_link ? 'highlight' : ''}
                    />
                  );
                }
                return null;
              })}
            </ul>
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
            className={`secondary-menu nav-button menu contact-menu ${
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
