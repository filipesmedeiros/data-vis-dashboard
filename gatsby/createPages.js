const path = require('path');

module.exports = exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/test.js`);
    const result = await graphql(`
    query {
        allTech {
            edges {
                node {
                    slug
                    title
                }
            }
        }
    }
  `);

    console.log(result);

    result.data.allTech.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
                title: edge.node.title,
            },
        })
    })
};