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
        schemas: {
          home_page: require('./src/schemas/home_page.json'),
          global_navigation: require('./src/schemas/global_navigation.json'),
          global_seo_settings: require('./src/schemas/global_seo_settings.json'),
        },
        prismicToolbar: false,
      },
    },
    'gatsby-plugin-netlify-cache',
    `gatsby-plugin-netlify`, // keep last in plugins array
  ],
};
