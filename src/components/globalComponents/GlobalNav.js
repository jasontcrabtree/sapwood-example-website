import React, { useRef } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import useMediaQuery from '../../hooks/useMediaQuery';

const MobileMenu = styled.ul``;

const GlobalNavStyles = styled.nav`
  /* Global Content Margin 11.9vw === 200px */
  opacity: 0.99;
  padding: 40px 200px;
  padding: 40px 11.9vw 0px;
  background-color: var(--honey-100);
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.02);

  li {
    max-width: 960px;

    a {
      max-width: 960px;
    }
  }

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
  }

  /* used to position svg inside links */
  .secondary-menu > li > a > div > svg {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 4px;
    margin-top: 6px;
  }

  .highlighted > a > svg {
    position: absolute;
    /* width: 24px !important; */
  }

  .highlighted > a {
    position: relative;
  }

  /* svg optical alignment */
  .secondary-menu > li > a > .chevron {
    margin-top: 4px;
    margin-bottom: 0px;
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
    width: 100%;

    h4 {
      padding: 24px 40px;
    }
  }

  .primary {
    padding: 0px;
  }

  .primary-menu {
    position: relative;
    cursor: pointer;
  }

  .primary-menu {
    display: inline-block;
    /* max-width: 160px; */
    /* width: 100%; */
    /* width: auto; */
  }
  .primary-menu > .nav-button > a {
    white-space: nowrap;
  }

  .secondary-menu {
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 32px;
  }

  .secondary-menu > li {
    margin-top: 0px;
    width: 100%;
  }

  .secondary-menu > li > a {
    padding: 24px 40px;
    width: 100%;
  }

  .secondary-menu > li > h4 {
    text-decoration: none;
  }

  .secondary-menu {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    width: 128px;
    width: fit-content;

    visibility: hidden;
    opacity: 0;
    z-index: 12;
  }

  .secondary-menu {
    box-shadow: var(--shadow-small);
  }

  .secondary-menu {
    width: fit-content;
    display: flex;
  }

  .contact-menu {
    width: 28rem;
    display: flex;
  }

  .contact-menu {
    right: 0rem;
    /* left: -8rem; */
    left: -12rem;
  }

  .services-menu {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }

  .secondary-menu > li {
    display: flex;
    flex-direction: row;
    /* height: 100%; */
    flex: 1;
    align-items: center;
    margin: 0px;
    align-content: stretch;
  }

  .secondary-menu {
    align-content: stretch;
  }

  .secondary-menu > li > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }

  .resources-menu {
    display: grid;
    grid-template-columns: repeat(2, minmax(352px, 1fr));
    grid-template-columns: repeat(2, minmax(22vw, 1fr));
    grid-template-columns: repeat(2, minmax(clamp(10vw, 22vw, 352px), 1fr));
  }

  .secondary-menu > li,
  .secondary-menu {
    border: 1px solid var(--grey-400);
  }

  .secondary-menu.active > li > a:hover {
    background: var(--turquoise-900);
    color: var(--honey-200);

    a {
      color: var(--honey-200);
    }
  }

  .primary-menu.active .chevron:not(.secondary-menu > li > a > div > .chevron) {
    transform: rotate(90deg);
  }

  .primary-menu.active,
  .primary.active,
  .active {
    background: var(--honey-100);
    z-index: 15;
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

    .mobile-menu-list {
      display: none;
      visibility: hidden;
      position: absolute;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 24px 24px 0px;
    box-shadow: 0px 4px 8px 6px rgba(0, 0, 0, 0.15);

    .nav-list {
      padding-bottom: 24px;
      border-bottom: none;
    }

    border-bottom: 3px solid var(--dusk-pink-600);

    li {
      padding: 24px;
    }

    ul {
      display: flex;
      flex-direction: column;
      li {
        flex-direction: column;
      }
    }

    li {
      line-height: 48px;
    }

    li > a {
      line-height: 150%;
    }

    li {
      background-color: var(--grey-200);
      border: 1px solid var(--grey-500);
    }

    .sapwood-wordmark-list {
      background-color: var(--honey-100);
      border: none;
    }

    .mobile-menu {
      li.primary-menu.active {
        background-color: var(--grey-200);
      }
    }

    .mobile-menu {
      li.primary:not(.active) {
        background-color: var(--grey-800);
        a,
        button {
          color: var(--grey-100);
        }
      }
    }

    .nav-button {
      background-color: var(--grey-200);
      background-color: inherit;
    }

    .primary-menu {
      .nav-button {
        width: 100%;
        justify-content: flex-start;
        display: flex;
      }
    }

    .sapwood-wordmark-list {
      margin: 0 24px 0 0;
      text-transform: uppercase;
      justify-content: center;
      letter-spacing: 0.3px;
      padding-left: 0px;
      line-height: 24px;
      max-width: 16ch;
    }

    .mobile-menu-list {
      margin: 0 auto;
      max-width: 32rem;
      width: calc(100vw - 48px);
      flex-direction: row;
      justify-content: space-between;
    }

    .mobile-menu {
      background-color: var(--honey-100);
      box-shadow: 0px 12px 8px 6px rgba(0, 0, 0, 0.15);
      padding: 24px;
      padding-top: 0px;

      position: absolute;
      left: 0px;
      right: 0px;

      margin-top: -16px;

      width: 100vw;

      border-radius: 0px 0px 4px 4px;

      visibility: hidden;
      opacity: 0;
      z-index: 12;

      border-bottom: 3px solid var(--dusk-pink-600);

      li {
        margin-left: auto;
        margin-right: auto;
        max-width: 32rem;
        width: calc(100vw - 48px);
      }

      li {
        padding-left: 0px;
      }

      li > a,
      li > button {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    .hamburger-button:focus,
    .nav-button:focus {
      outline: 2px solid var(--grey-500);
      box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
    }

    .mobile-active {
      transition: transform 250ms, opacity 400ms linear;
    }

    .secondary-menu > li > a > div > svg {
      display: flex;
      margin-left: 8px;
      margin-top: -8px !important;
      /* margin-top: 16px; */
    }

    .secondary-menu.active {
      transition: transform 500ms, opacity 400ms linear;
    }

    .secondary-menu {
      margin: 0px;
      margin-top: 48px;
    }

    .secondary-menu > li {
      padding: 0px;
    }

    .secondary-menu > li > a {
      padding: 8px 24px;
    }

    .contact-menu,
    .secondary-menu,
    .services-menu {
      opacity: 0.99;
      width: auto;
      display: flex;
    }

    .contact-menu,
    .secondary-menu,
    .services-menu {
      right: -1px;
      left: -1px;
    }

    .services-menu,
    .resources-menu {
      left: -2px;
      right: -2px;
    }

    .mobile-menu.mobile-active {
      cursor: pointer;
      z-index: 10;
      opacity: 1;
      visibility: visible;

      transition: transform 250ms, opacity 400ms linear;
    }

    .services-menu {
      display: grid;
      grid-template-columns: 1fr;
    }

    .resources-menu {
      display: grid;
      grid-template-columns: 1fr;
    }

    .mobile-menu-list {
      align-items: center;
    }

    .hamburger-button {
      background-color: var(--dusk-pink-100);
      border: 1px solid var(--dusk-pink-700);

      padding: 6px 24px 4px 24px;
      border-radius: 4px;
      height: auto;

      transition: transform 250ms linear;

      svg {
        transition: transform 250ms linear;
        margin-left: 4px;
      }
    }

    .serif-title {
      display: none !important;
    }

    .mobile-menu.mobile-active {
      .sapwood-wordmark-list,
      .hidden-on-mobile {
        position: absolute;
        opacity: 0;
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
function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function NestedLink({ id, link, label, highlighted }) {
  return (
    <li key={id} className={`${highlighted ? 'highlight' : ''}`}>
      <Link to={link}>
        {label}
        <div>
          <Arrow />
        </div>
      </Link>
    </li>
  );
}

function GlobalNav() {
  const mobileMenuRef = useRef(null);
  const servicesDropdownMenuRef = useRef(null);
  const resourcesDropdownMenuRef = useRef(null);
  const contactDropdownMenuRef = useRef(null);

  // custom hook, we pass into params of dropdownRef (the element we are maintaining with state, and false as default useState)

  const [isMobileMenuActive, setMobileMenuActive] = useDetectOutsideClick(
    mobileMenuRef,
    false
  );

  const [isMenuOneActive, setIsMenuOneActive] = useDetectOutsideClick(
    servicesDropdownMenuRef,
    false
  );

  const [isMenuTwoActive, setMenuTwoState] = useDetectOutsideClick(
    resourcesDropdownMenuRef,
    false
  );

  const [isMenuThreeActive, setMenuThreeState] = useDetectOutsideClick(
    contactDropdownMenuRef,
    false
  );

  function genericEnter(setState, isState) {
    setState(!isState);
  }

  function genericLeave(setState, isState) {
    setState(!isState);
  }

  const useMaxWidth640px = useMediaQuery('(max-width: 960px)');

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

  /*
TODO: I changed the mobile menu to onClick instead of onMouseEnter/onMouseLeave for consistent opening and closing. That fixed the parent mobile menu state on/off switch ability, but now need to fix nested menu on/off state to work differently on desktop to mobile (hover vs click)
*/

  return (
    <GlobalNavStyles
      className={`${isMobileMenuActive ? 'nav-parent-active' : ''}`}
    >
      <MobileMenu
        className="nav-list mobile-menu-list"

        // onBlur={() => genericLeave(setMobileMenuActive, isMobileMenuActive)}
      >
        <li className="sapwood-wordmark-list primary">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>
        <button
          className="hamburger-button nav-button mobile-button"
          type="button"
          onClick={
            useMaxWidth640px
              ? () => genericEnter(setMobileMenuActive, isMobileMenuActive)
              : null
          }
        >
          Menu
          {!isMobileMenuActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </MobileMenu>

      <ul
        ref={mobileMenuRef}
        className={`nav-list mobile-menu ${
          isMobileMenuActive ? 'mobile-active' : ''
        }`}
      >
        <li className="sapwood-wordmark-list primary">
          <Link to="/" className="sapwood-wordmark">
            Sapwood Financial Advisors
          </Link>
        </li>

        <li
          ref={servicesDropdownMenuRef}
          className={`primary primary-menu ${isMenuOneActive ? 'active' : ''}`}
          onMouseLeave={
            !useMaxWidth640px
              ? () => genericLeave(setIsMenuOneActive, isMenuOneActive)
              : null
          }
          onBlur={
            !useMaxWidth640px
              ? () => genericLeave(setIsMenuOneActive, isMenuOneActive)
              : null
          }
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={
              !useMaxWidth640px
                ? () => genericEnter(setIsMenuOneActive, isMenuOneActive)
                : null
            }
            onFocus={
              !useMaxWidth640px
                ? () => genericEnter(setIsMenuOneActive, isMenuOneActive)
                : null
            }
            onClick={
              useMaxWidth640px
                ? () => genericEnter(setIsMenuOneActive, isMenuOneActive)
                : null
            }
          >
            <Link to={servicesLink}>
              {servicesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button services-menu ${
              isMenuOneActive ? 'active' : ''
            }`}
          >
            {/* map over nested items (in an array comprised of the prismic items + additional title section) */}
            {servicesArray.map((items) =>
              items.map((item, i) => {
                if (item.length > 2) {
                  return (
                    <li key={i} className="highlight serif-title">
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
          ref={resourcesDropdownMenuRef}
          className={`primary primary-menu ${isMenuTwoActive ? 'active' : ''}`}
          // onMouseLeave={
          //   !useMaxWidth640px
          //     ? () => genericLeave(setMenuTwoState, isMenuTwoActive)
          //     : null
          // }
          // onBlur={
          //   !useMaxWidth640px
          //     ? () => genericLeave(setMenuTwoState, isMenuTwoActive)
          //     : null
          // }
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={
              !useMaxWidth640px
                ? () => genericEnter(setMenuTwoState, isMenuTwoActive)
                : null
            }
            onFocus={
              !useMaxWidth640px
                ? () => genericEnter(setMenuTwoState, isMenuTwoActive)
                : null
            }
            onClick={
              useMaxWidth640px
                ? () => genericEnter(setMenuTwoState, isMenuTwoActive)
                : null
            }
          >
            <Link to={resourcesLink}>
              {resourcesLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button resources-menu ${
              isMenuTwoActive ? 'active' : ''
            }`}
          >
            {/* map over nested items (in an array comprised of the prismic items + additional title section) */}
            {resourcesArray.map((items) =>
              items.map((item, i) => {
                if (item.length > 1) {
                  return (
                    <li key={i} className="highlight serif-title">
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
          <Link to={blogLink}>{blogLabel}</Link>
        </li>

        <li
          ref={contactDropdownMenuRef}
          className={`primary primary-menu ${
            isMenuThreeActive ? 'active' : ''
          }`}
          onMouseLeave={
            !useMaxWidth640px
              ? () => genericLeave(setMenuThreeState, isMenuThreeActive)
              : null
          }
          onBlur={
            !useMaxWidth640px
              ? () => genericLeave(setMenuThreeState, isMenuThreeActive)
              : null
          }
        >
          <button
            className="nav-button"
            type="button"
            onMouseEnter={
              !useMaxWidth640px
                ? () => genericEnter(setMenuThreeState, isMenuThreeActive)
                : null
            }
            onFocus={
              !useMaxWidth640px
                ? () => genericEnter(setMenuThreeState, isMenuThreeActive)
                : null
            }
            onClick={
              useMaxWidth640px
                ? () => genericEnter(setMenuThreeState, isMenuThreeActive)
                : null
            }
          >
            <Link to={contactLink}>
              {contactLabel}
              <Chevron />
            </Link>
          </button>

          <ul
            className={`secondary-menu nav-button contact-menu
            ${isMenuThreeActive ? 'active' : ''}`}
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
