import React from 'react';
import Portfolio from '../../components/Portfolio';
import { graphql } from 'gatsby';

// Here we import .json files and do stuff with them
export default ({ data }) =>
    <Portfolio entries={ data.allPortfolioJson.nodes }/>

export const query = graphql`
    query {
        allPortfolioJson {
            nodes {
                title
                description
                websiteUrl
                thumbnailUrl
                thumbnailAlt
            }
        }
    }
`;