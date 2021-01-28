const wrapper = (promise) =>
  promise.then((pages) => {
    if (pages.errors) throw pages.errors;
    return pages;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all Pages with their IDs and template data.
  const blogPosts = await wrapper(
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

  const blogPostTemplate = require.resolve(
    './src/templates/BlogPostTemplate.js'
  );

  // Create pages for each Page in Prismic using the selected template.
  blogPosts.data.allPrismicBlogRepeatable.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.uid}`,
      component: blogPostTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
};
