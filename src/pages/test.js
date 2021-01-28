import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';

import SEO from '../components/globalComponents/SEO';

// export const homePageQuery = graphql`
//   query MyQuery {
//     allPrismicBlogRepeatable {
//       nodes {
//         data {
//           body {
//             items {
//               blog_post_text_content {
//                 text
//                 type
//               }
//             }
//           }
//         }
//       }
//     }
//     prismicBlogRepeatable {
//       data {
//         body {
//           items {
//             blog_post_text_content {
//               type
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const test = (props) => {
  if (!props) return null;
  console.log(props);

  return (
    <div>
      <SEO />
      <p>Hello</p>
    </div>
  );
};

export default test;
