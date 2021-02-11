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
    outline: 1px solid red;
  }

  li {
    outline: 1px solid blue;
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
                primary {
                  label {
                    text
                  }
                }
                items {
                  sub_nav_link_label {
                    text
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
  // console.log(globalNavRes);

  // globalNavRes.map((nav, i) => {
  //   const count = i;
  //   console.log(nav.primary.label.text.toUpperCase());
  //   // console.log(nav.items);
  //   nav.items.map((item, id) => console.log(item.sub_nav_link_label.text, id));
  //   /*     if (nav.items.length > 1) {
  //     // console.log(nav.items.sub_nav_link_label.text);
  //     console.log(nav?.items?.sub_nav_link_label?.text);
  //   } else {
  //     return null;
  //   } */
  //   return count;
  // });

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
        {globalNavRes.map((nav, i) => (
          <li key={i}>
            {nav.items.length ? (
              <img
                src={ChevronRight}
                className="chevron"
                alt="Chevron Pointing Right"
              />
            ) : (
              ''
            )}
            <Link to="/">{nav.primary.label.text.toUpperCase()}</Link>
            {nav.items.length ? (
              <ul>
                {nav.items.map((item, id) => (
                  <li key={id}>
                    <Link to="/">{item.sub_nav_link_label.text}</Link>
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
