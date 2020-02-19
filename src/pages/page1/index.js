import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';

// You can have keyframes (like in /directory), but you can also most of the
// time just use transition for props (you probably know this but might as well)
// Can also show @media breakpoints here
const AnimatedWidthHoverDiv = styled.div`
  display: inline-block;
  height: 300px;
  background: cadetblue;
  width: ${props => props.width}px;
  transition: width 1s ease-in-out;
  &:hover {
    width: ${props => props.hoverWidth}px;
  }
  
  /*
   The beauty of CSS in JS is that you can manipulate CSS with JS
   without passing objects around to every component
   Changing passed props just works, for every styled-component that extends
   this one
   */
  @media (max-width: 900px) {
    &:hover {
      width: ${props => props.hoverWidth / 2}px;
    }
  }
`;

export default () =>
    <div>
        <Navbar/>
        You are now in page 1.
        <br/>
        <AnimatedWidthHoverDiv width={200} hoverWidth={500}/>
    </div>