import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ title, description, location, image, imageALT }) {
  const data = useStaticQuery(graphql`
    query metaQuery {
      prismicGlobalSeoSettings {
        data {
          meta_title
          secondary_title
          meta_description
          meta_site_name
          twitter_username
          social_sharing_image {
            url
            alt
          }
          twitter_social_sharing_image {
            url
            alt
          }
          website_url {
            url
            link_type
          }
        }
      }
    }
  `);

  const metaDataQuery = data.prismicGlobalSeoSettings.data;

  // let metaDataQuery = 'data';

  // metaDataQuery = {
  //   meta_title: 'Placeholder Title',
  //   meta_description: 'Placeholder Description',
  //   secondary_title: 'Secondary Title',
  //   twitter_username: '@lodestonestudio',
  //   social_sharing_image: {
  //     url: 'https://images.unsplash.com/photo-1564316893853-d62a3593c84e',
  //     alt:
  //       'A bright and colourful studio office with a brick facing back and a retro green iMac on a vintage desk',
  //   },
  //   website_url: {
  //     url: 'https://lodestone-template.netlify.app',
  //   },
  // };

  const metaDataValues = {
    title: metaDataQuery.meta_title,
    description: metaDataQuery.meta_description,
    image: metaDataQuery.social_sharing_image.url,
    imageALT: metaDataQuery.social_sharing_image.alt,
    location: metaDataQuery.website_url.url,

    titleTemplate: metaDataQuery.secondary_title,
    twitterUsername: metaDataQuery.twitter_username,
    metaSiteName: metaDataQuery.meta_site_name,
  };

  return (
    <Helmet
      title={title || metaDataValues.title}
      titleTemplate={`%s ${metaDataValues.titleTemplate}`}
    >
      <html lang="en" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <meta property="og:title" content={title || metaDataValues.title} />
      <meta name="twitter:title" content={title || metaDataValues.title} />

      <meta
        name="description"
        content={description || metaDataValues.description}
      />
      <meta
        property="og:description"
        content={description || metaDataValues.description}
      />
      <meta
        name="twitter:description"
        content={description || metaDataValues.description}
      />

      <meta name="image" content={image || metaDataValues.image} />
      <meta property="og:image" content={image || metaDataValues.image} />
      <meta name="twitter:image" content={image || metaDataValues.image} />
      <meta
        name="twitter:image:alt"
        content={imageALT || metaDataValues.imageALT}
      />

      {location && (
        <meta
          property="og:url"
          content={`${metaDataValues.location}${location}`}
        />
      )}

      <meta property="og:site_name" content={metaDataValues.metaSiteName} />
      <meta name="twitter:creator" content={metaDataValues.twitterUsername} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
