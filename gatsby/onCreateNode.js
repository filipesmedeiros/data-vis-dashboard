const createFilePath = require('gatsby-source-filesystem');

const TECH = require('./config');

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    console.log(node.internal.type);
    switch(node.internal.type) {
        case TECH:
            const slug = createFilePath({ node, getNode, basePath: `pages` });
            createNodeField({
                node,
                name: `slug`,
                value: slug,
            });
    }
};