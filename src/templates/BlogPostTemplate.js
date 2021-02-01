import React from 'react';
import { graphql } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import HeroTitleBlockTwo from '../components/titles/HeroTitleBlockTwo';
import SliceZone from '../components/globalComponents/SliceZone';

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
              image_block_size
              image_colour_block_size
              image_colour_block_position
            }
            items {
              image {
                url
                alt
              }
              image_block_colour_style
              image_alt_text
              image_credit
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
  section {
    /* outline: 1px solid var(--green-400); */
    display: grid;
    grid-column: 3 / 11;
    margin: 0 auto;
  }

  section > * {
    max-width: 648px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    /* border: 1px solid orangered; */
  }

  section > * + * {
    margin-top: 48px;
  }

  section:first-child > * {
    max-width: 848px;
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

  const blogPostBody = blogPostRepeatableRes.body;

  // console.log(blogPostBody);

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
      <section>
        <SliceZone body={blogPostBody} />
      </section>
    </BlogTemplateMainStyles>
  );
};

export default PageTemplate;
