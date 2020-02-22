import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Path1 from '../assets/Path1';
import Path2 from '../assets/Path2';

const RelativeDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
`;

const StyledPath1 = styled(Path1)`
  height: 100%;
  width: 40%;
  max-width: 600px;
  min-width: 250px;
  float: right;
`;

const StyledPath2 = styled(Path2)`
  height: 100%;
  width: 40%;
  max-width: 600px;
  min-width: 250px;
  float: left;
`;

/*
// This was a test for
const testGradient = [
    {
        offset: 0,
        color: '#000'
    },
    {
        offset: 1,
        color: '#fff'
    }
];
*/

export default ({ children, animateMove, animateGrad, gradient }) => {
    return <RelativeDiv>
        <Background>
            <StyledPath2
                stretch
                animateMove={animateMove}
                animateGrad={animateGrad} />
            <StyledPath1
                stretch
                animateMove={animateMove}
                animateGrad={false} />
        </Background>
        {children}
    </RelativeDiv>
}