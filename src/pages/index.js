import React from 'react';
import { graphql, Link } from 'gatsby';

import ExampleComponent from '../components/ExampleComponent';
import Navbar from '../components/Navbar';

export default ({ data }) =>
    <div>
        The title of our website is { data.site.siteMetadata.title }!
        <Navbar/>
        Hello world!
        <br/>
        <ExampleComponent/>
        <br/>
        <Link to='./directory'>Take me to 'directory', please.</Link>
        <br/>
        <a href='https://google.com'>
            But for external links I'm still the way to go.
        </a>
    </div>

// There's also a way of coloring and auto completing this but it's too hard
// This is GraphQL, after querying with this, you can use it in the component
// Here I take some information from the config file (gatsby-config.js)
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;