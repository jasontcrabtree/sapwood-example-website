module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'sapwood-example-website',
        linkResolver: () => (doc) => {
          if (doc.type === 'blog_repeatable') {
            return `/blog/${doc.uid}`;
          }
          if (doc.type === 'resources_repeatable') {
            return `/resources/${doc.uid}`;
          }
          if (doc.type === 'services_repeatable') {
            return `/services/${doc.uid}`;
          }
          // Backup for all other types
          return `/${doc.uid}`;
        },
        schemas: {
          about_page: require('./src/schemas/about_page.json'),
          blog_page: require('./src/schemas/blog_page.json'),
          blog_repeatable: require('./src/schemas/blog_repeatable.json'),
          calculators_page: require('./src/schemas/calculators_page.json'),
          contact_page: require('./src/schemas/contact_page.json'),
          global_cta: require('./src/schemas/global_cta.json'),
          global_footer: require('./src/schemas/global_footer.json'),
          global_navigation: require('./src/schemas/global_navigation.json'),
          global_newsletter: require('./src/schemas/global_newsletter.json'),
          global_seo_settings: require('./src/schemas/global_seo_settings.json'),
          home_page: require('./src/schemas/home_page.json'),
          legal_page: require('./src/schemas/legal_page.json'),
          pricing_page: require('./src/schemas/pricing_page.json'),
          referrals_page: require('./src/schemas/referrals_page.json'),
          resources_page: require('./src/schemas/resources_page.json'),
          resources_repeatable: require('./src/schemas/resources_repeatable.json'),
          services_page: require('./src/schemas/services_page.json'),
          services_repeatable: require('./src/schemas/services_repeatable.json'),
        },
        prismicToolbar: false,
      },
    },
    `gatsby-plugin-preload-fonts`,
    // `gatsby-plugin-preact`,
    'gatsby-plugin-netlify-cache',
    `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
