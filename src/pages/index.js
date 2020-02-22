import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import BarGraph from '../graph/BarGraph';
import { Unit } from '../env';

const StyledBarGraph = styled(BarGraph)`
    width: 40vw;
    height: 40vh;
`;

export default () => (
    <>
        <StyledBarGraph
            title={'Hello'}
            yLabel={'Y'}
            xLabel={'X'}
            scale={{ begin: 0, step: 5, end: 100 }}
            values={[90, 80, 30, 100, 20, 90, 2]}
            barStyling={{ gap: 5 }}
            styling={{
                contentDimensions: {
                    height: 30,
                    width: 30,
                    unit: Unit.percent
                }
            }}
        />
    </>
);

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
