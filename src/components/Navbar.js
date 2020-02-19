import React from 'react';
import { Link } from 'gatsby';

const activeStyle = {
    color: 'green'
};

// Example navbar
export default () =>
    <nav>
        <ul>
            <li><Link to='/'
                      activeStyle={activeStyle}>
                Link to Home
            </Link></li>
            <li><Link to='/page1'
                      activeStyle={activeStyle}>
                Link to Page 1
            </Link></li>
            <li><Link to='/page2'
                      activeStyle={activeStyle}>
                Link to Page 2
            </Link></li>
            <li><Link to='/page3'
                      activeStyle={activeStyle}>
                Link to Page 3, with "posts"
            </Link></li>
            <li><Link to='/blog/test'
                      activeStyle={activeStyle}>
                Link to the Blog
            </Link></li>
        </ul>
    </nav>