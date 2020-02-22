/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// We can check this config later
// Here is where you can store static info about the website
module.exports = {
    siteMetadata: {
        title: `Root Webdev`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`
            }
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-styled-components`
    ]
};
