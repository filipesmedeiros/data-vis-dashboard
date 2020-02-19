import React from 'react';
import styled, { keyframes } from 'styled-components';

// this is probably the best way to use animations in styled-components
const slideBackAndForth = (yTranslate) => keyframes`
    from {
      transform: translate(0, 0);
    }
    
    to {
      transform: translate(300px, ${yTranslate}px);
    }
`;

const AutoWidthDiv = styled.div`
  width: auto;
  display: inline-block;
`;

const SlidingDiv = styled(AutoWidthDiv)`
  animation: ${props => slideBackAndForth(props.yTranslate)} 4s infinite ease-in-out alternate;
`;

export default () =>
    <AutoWidthDiv>
        I'm a page inside directory.
        <br/>
        <SlidingDiv yTranslate={200}>And I'm a custom div with styled-keyframes.</SlidingDiv>
    </AutoWidthDiv>