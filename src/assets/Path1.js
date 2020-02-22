import React from 'react';

import randomId from '../util/randomId';

const gradientId = randomId();

export default ({ className, animateMove, animateGrad, gradient, stretch }) =>
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 781.265 957.26"
         role='presentation'
         className={className}
         preserveAspectRatio={ stretch ? 'none' : 'xMidYMid meet' }
    >
        <defs>
            <radialGradient id={gradientId}
                            cx="0.5" cy="1" r="2" fx="-0.5" fy="-0.9">
                <animate attributeName="cx"
                         values="0.5; 0.75; 1; 0.75; 0.5"
                         keyTimes="0; 0.25; 0.5; 0.75; 1"
                         calcMode="spline"
                         keySplines={`0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1`
                         }
                         begin="0s"
                         dur="5s"
                         repeatCount="indefinite"
                />
                <animate attributeName="cy"
                         values="1; 0.75; 0; 0.75; 1"
                         keyTimes="0; 0.25; 0.5; 0.75; 1"
                         calcMode="spline"
                         keySplines={`0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1`
                         }
                         begin="0s"
                         dur="5s"
                         repeatCount="indefinite"
                />
                <stop offset="0%" stopColor="#ffb24e"/>
                <stop offset="100%" stopColor="#ff833b"/>
            </radialGradient>
            {/*
            <linearGradient id={gradientId} x1="1" y1="0" x2="1" y2="1"
                            gradientUnits="objectBoundingBox" spreadMethod='reflect'>

                { gradient !== undefined ? gradient.map((stop, key) =>
                        <stop key={ key } offset={ stop.offset } stopColor={ stop.color }/>) :
                    <>
                        <stop offset="100%" stopColor={"#000"}>
                            { animateGrad && <animate  attributeName="offset"
                                                       from="0%"
                                                       to="200%"
                                                       dur="5s"
                                                       repeatCount="indefinite"
                            /> }
                        </stop>
                        <stop offset="110%" stopColor={"#fff"}>
                            { animateGrad && <animate  attributeName="offset"
                                                       from="100%"
                                                       to="200%"
                                                       dur="5s"
                                                       repeatCount="indefinite"
                            /> }
                        </stop>
                    </>
                }
            </linearGradient>
*/}
        </defs>
        <path style={{ fill: `url(#${gradientId})` }}
              d="M2007.2,1175.615H1225.933s25.992-95.49,136.338-185.6,153.531-58.755,266.1-168.162,60.264-184.471,133.051-275.342,139.211-61.8,188.489-120.116,57.284-208.04,57.284-208.04"
              transform="translate(-1225.933 -218.355)">
            { animateMove && <animate attributeName="d"
                                      values={`M2007.2,1175.615H1225.933s25.992-95.49,136.338-185.6,153.531-58.755,266.1-168.162,60.264-184.471,133.051-275.342,139.211-61.8,188.489-120.116,57.284-208.04,57.284-208.04;
                     M2007.2,1175.615H1225.933s28.558-113.188,138.9-203.3,163.2-39.849,275.768-149.256S1707.124,625.37,1779.911,534.5s124.143-34.076,173.421-92.4S2007.2,218.355,2007.2,218.355;
                     M2007.2,1175.615H1225.933s27.137-94.709,137.483-184.82,150.4-59.75,262.975-169.157,59.411-186.319,132.2-277.19,135.515-71.035,184.793-129.355S2007.2,218.355,2007.2,218.355;
                     M2007.2,1175.615H1225.933s25.992-95.49,136.338-185.6,153.531-58.755,266.1-168.162,60.264-184.471,133.051-275.342,139.211-61.8,188.489-120.116,57.284-208.04,57.284-208.04`}
                                      keyTimes="0; 0.33; 0.66; 1"
                                      calcMode="spline"
                                      keySplines={
                                          `0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1`
                                      }
                                      begin="0s"
                                      dur="5s"
                                      repeatCount="indefinite"
                                      fill="freeze"
            /> }
        </path>
    </svg>
