import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import TitleBlock from '../components/TitleBlock';
import SliceZone from '../components/globalComponents/SliceZone';
import normaliseTitleStyle from '../utils/normaliseTitleStyle';

export const blogPostQuery = graphql`
  query blogPostRepeatableSinglePost($uid: String) {
    prismicBlogRepeatable(uid: { eq: $uid }) {
      uid
      data {
        blog_post_title {
          text
        }
        title_style
        blog_post_author
        publish_date(formatString: "DD MMMM, YYYY")
        last_updated_date(formatString: "DD MMMM, YYYY")
        body {
          ... on PrismicBlogRepeatableBodyBlogPostContent {
            id
            slice_type
            items {
              blog_post_text_content {
                html
              }
            }
          }
          ... on PrismicBlogRepeatableBodyImageBlock {
            id
            slice_type
            primary {
              image {
                alt
                url
              }
              image_block_colour_position
              image_block_colour_style
              image_source
              image_source_link {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const BlogTemplateMainStyles = styled.main`
  h1 {
    text-transform: uppercase;
  }

  section {
    /* outline: 1px solid var(--green-400); */
    display: grid;
    grid-column: 3 / 11;
    margin-left: auto;
    margin-right: auto;
  }

  section > * {
    max-width: 648px;
    margin-left: auto;
    margin-right: auto;
  }

  section > * + * {
    margin-top: 64px;
  }

  section > figure {
    margin-top: 64px;
  }

  section:first-child > * {
    max-width: 848px;
  }

  @media screen and (max-width: 920px) {
    section {
      grid-column: 1 / -1;
    }
  }
`;

const BlogPostTemplate = (props) => {
  if (!props) return <h1>No props</h1>;
  const { data } = props;
  const blogPostRepeatableRes = data.prismicBlogRepeatable.data;

  // SEO
  //   const title = prismicBlogPostDataResponse.meta_title;
  //   const description = prismicBlogPostDataResponse.meta_description;
  //   const image = prismicBlogPostDataResponse.custom_page_meta_image.url;
  //   const imageALT = prismicBlogPostDataResponse.custom_page_meta_image.alt;

  // POST INFO
  const pageInfoTitle = blogPostRepeatableRes.blog_post_title.text;
  const pageInfoPublishDate = blogPostRepeatableRes.publish_date || '';
  const pageInfoUpdatedDate = blogPostRepeatableRes.last_updated_date || '';
  const pageInfoAuthor = blogPostRepeatableRes.blog_post_author || '';

  // POST CONTENT

  const blogPostBody = blogPostRepeatableRes.body;

  // console.log(blogPostBody);

  //   const fluidImgURL =
  //     prismicBlogPostDataResponse.cover_image.localFile.childImageSharp.fluid;
  //   const fluidImgALT = prismicBlogPostDataResponse.cover_image.alt;

  console.log(blogPostRepeatableRes.title_style);

  return (
    <BlogTemplateMainStyles id="main">
      <SEO
      /* title={title}
        image={image}
        imageALT={imageALT}
        description={description} */
      />
      <section>
        <TitleBlock
          titleText={pageInfoTitle}
          headingSize="h1"
          titleStyle={
            normaliseTitleStyle(blogPostRepeatableRes.title_style) || ''
          }
        />
      </section>
      <section>
        <span className="eyebrow">
          {pageInfoPublishDate ? <>Published {pageInfoPublishDate}</> : null}
          {pageInfoUpdatedDate ? (
            <>• Last Updated {pageInfoUpdatedDate} </>
          ) : null}
          {pageInfoAuthor ? <>• Author: {pageInfoAuthor}</> : null}
        </span>
      </section>
      <section>
        <SliceZone body={blogPostBody} />
      </section>
    </BlogTemplateMainStyles>
  );
};

export default BlogPostTemplate;
