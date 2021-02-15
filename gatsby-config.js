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
          if (doc.type === 'page_repeatable') {
            return `/${doc.uid}`;
          }
          if (doc.type === 'referrals_page') {
            return `/contact/${doc.uid}`;
          }
          if (doc.type === 'calculators_page') {
            return `/resources/${doc.uid}`;
          }
          // Backup for all other types
          return `/${doc.uid}`;
        },
        schemas: {
          about_page: require('./src/schemas/single/about_page.json'),
          blog_page: require('./src/schemas/single/blog_page.json'),
          blog_repeatable: require('./src/schemas/repeatable/blog_repeatable.json'),
          calculators_page: require('./src/schemas/single/calculators_page.json'),
          contact_page: require('./src/schemas/single/contact_page.json'),
          global_cta: require('./src/schemas/global/global_cta.json'),
          global_footer: require('./src/schemas/global/global_footer.json'),
          global_navigation: require('./src/schemas/global/global_navigation.json'),
          global_newsletter: require('./src/schemas/global/global_newsletter.json'),
          global_seo_settings: require('./src/schemas/global/global_seo_settings.json'),
          home_page: require('./src/schemas/single/home_page.json'),
          legal_page: require('./src/schemas/single/legal_page.json'),
          pricing_page: require('./src/schemas/single/pricing_page.json'),
          referrals_page: require('./src/schemas/single/referrals_page.json'),
          resources_page: require('./src/schemas/single/resources_page.json'),
          resources_repeatable: require('./src/schemas/repeatable/resources_repeatable.json'),
          services_page: require('./src/schemas/single/services_page.json'),
          services_repeatable: require('./src/schemas/repeatable/services_repeatable.json'),
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
