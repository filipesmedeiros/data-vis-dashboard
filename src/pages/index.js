import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import BarGraph from '../graph/BarGraph';

const StyledBarGraph = styled(BarGraph)`
  width: 300px;
  height: 300px;
`;

const StyledBarGraph2 = styled(BarGraph)`
  width: 50vw;
  height: 500px;
`;

export default ({ data }) =><>
    <StyledBarGraph2
        title={ 'Hello' }
        yLabel={ 'Y Label' }
        xLabel={ 'X Label' }
        scale={{ begin: 0, step: 5, end: 100 }}
        values={[90, 80, 30, 100, 20, 90]}
        styling={{ gap: 5 }}
    />

    <StyledBarGraph
        title={ 'Hello' }
        yLabel={ 'Y Label' }
        xLabel={ 'X Label' }
        scale={{ begin: 0, step: 5, end: 100 }}
        values={[90, 80, 30, 100, 20, 90]}
    /> </>

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