import React from 'react';
import { graphql } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import HeroTitleBlockTwo from '../components/titles/HeroTitleBlockTwo';

export const query = graphql`
  query blogPostRepeatableSinglePost($uid: String) {
    prismicBlogRepeatable(uid: { eq: $uid }) {
      uid
      data {
        blog_post_title {
          text
        }
        blog_post_author
        publish_date(formatString: "DD MMMM, YYYY")
        last_updated_date(formatString: "DD MMMM, YYYY")
        body {
          ... on PrismicBlogRepeatableBodyBlogPostContent {
            id
            items {
              blog_post_text_content {
                html
              }
            }
          }
          ... on PrismicBlogRepeatableBodyImageBlock {
            id
            items {
              image {
                url
                alt
              }
              image_block_colour_style
            }
          }
        }
      }
    }
  }
`;

const BlogTemplateMainStyles = styled.main`
  section {
    outline: 1px solid var(--green-400);
    display: grid;
    grid-column: 3 / 11;
    margin: 0 auto;
    max-width: auto;
  }

  section::not(::first-child) {
    max-width: 648px;
  }
`;

const PageTemplate = (props) => {
  const { data } = props;
  const blogPostRepeatableRes = data.prismicBlogRepeatable.data;

  // SEO
  //   const title = prismicBlogPostDataResponse.meta_title;
  //   const description = prismicBlogPostDataResponse.meta_description;
  //   const image = prismicBlogPostDataResponse.custom_page_meta_image.url;
  //   const imageALT = prismicBlogPostDataResponse.custom_page_meta_image.alt;

  // POST INFO
  const pageInfoTitle = blogPostRepeatableRes.blog_post_title.text;
  const pageInfoPublishDate = blogPostRepeatableRes.publish_date;
  const pageInfoUpdatedDate = blogPostRepeatableRes.last_updated_date;
  const pageInfoAuthor = blogPostRepeatableRes.blog_post_author;

  // POST CONTENT
  const blogPostContent =
    blogPostRepeatableRes.body[0].items[0].blog_post_text_content.html;

  //   const fluidImgURL =
  //     prismicBlogPostDataResponse.cover_image.localFile.childImageSharp.fluid;
  //   const fluidImgALT = prismicBlogPostDataResponse.cover_image.alt;

  return (
    <BlogTemplateMainStyles id="main">
      <SEO
      /* title={title}
        image={image}
        imageALT={imageALT}
        description={description} */
      />
      <section>
        <HeroTitleBlockTwo title={pageInfoTitle} />
      </section>
      <section>
        <span className="eyebrow">
          Published {pageInfoPublishDate} • Last Updated {pageInfoUpdatedDate} •
          Author: {pageInfoAuthor}
        </span>
      </section>
      {/* <section>
        {blogPostRepeatableRes.body.items((body, i) => {
          console.log(body.items);
          return <p>{body.items}</p>;
        })}
      </section> */}
      <section>
        <HTMLRenderer html={blogPostContent} />
      </section>
      {/* TODO: SLICEZONE???? */}
    </BlogTemplateMainStyles>
  );
};

export default PageTemplate;
