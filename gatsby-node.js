const graphQLWrapper = (promise) =>
  promise.then((pages) => {
    if (pages.errors) throw pages.errors;
    return pages;
  });

async function createRepeatableBlogPages({ graphql, actions }) {
  const blogPostTemplate = require.resolve(
    './src/templates/BlogPostTemplate.js'
  );

  // Query all Pages with their IDs and template data.
  const blogPosts = await graphQLWrapper(
    graphql(`
      query blogRepeatableNodeQuery {
        allPrismicBlogRepeatable {
          nodes {
            id
            uid
            data {
              blog_post_title {
                text
              }
              publish_date
              blog_post_author
            }
          }
        }
      }
    `)
  );

  // Create pages for each Page in Prismic using the selected template.
  blogPosts.data.allPrismicBlogRepeatable.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/${node.uid}`,
      component: blogPostTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
}

async function createRepeatableResourcesPages({ graphql, actions }) {
  const resourcesPageTemplate = require.resolve(
    './src/templates/ResourcesPageTemplate.js'
  );

  // Query all Pages with their IDs and template data.
  const resourcesPages = await graphQLWrapper(
    graphql(`
      query resourcesRepeatableNodeQuery {
        allPrismicResourcesRepeatable {
          nodes {
            id
            uid
            data {
              page_title {
                text
              }
            }
          }
        }
      }
    `)
  );

  // Create pages for each Page in Prismic using the selected template.
  resourcesPages.data.allPrismicResourcesRepeatable.nodes.forEach((node) => {
    actions.createPage({
      path: `/resources/${node.uid}`,
      component: resourcesPageTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
}

async function createRepeatableServicesPage({ graphql, actions }) {
  const servicesPageTemplate = require.resolve(
    './src/templates/ServicesPageTemplate.js'
  );

  // Query all Pages with their IDs and template data.
  const servicesPages = await graphQLWrapper(
    graphql(`
      query servicesRepeatableNodeQuery {
        allPrismicServicesRepeatable {
          nodes {
            id
            uid
          }
        }
      }
    `)
  );

  // Create pages for each Page in Prismic using the selected template.
  servicesPages.data.allPrismicServicesRepeatable.nodes.forEach((node) => {
    actions.createPage({
      path: `/services/${node.uid}`,
      component: servicesPageTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
}

// export async function createPages(params) {
exports.createPages = async (params) => {
  await Promise.all([
    createRepeatableBlogPages(params),
    createRepeatableResourcesPages(params),
    createRepeatableServicesPage(params),
  ]);
};
