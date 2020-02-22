import React from 'react';

import randomId from '../util/randomId';

const gradientId = randomId();

export default ({ className, animateMove, animateGrad, gradient, stretch }) =>
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 872.264 1080"
         role='presentation'
         className={className}
         preserveAspectRatio={ stretch ? 'none' : 'xMidYMid meet' }
    >
        <defs>
            <linearGradient id={ gradientId } x1="0.5" y1="0.187" x2="0.11" y2="0.946"
                            gradientUnits="objectBoundingBox">
                { gradient !== undefined ? gradient.map((stop, key) =>
                        <stop key={key} offset={stop.offset} stopColor={ stop.color }/>) :
                    <>
                        <stop offset="0" stopColor="#ff833b"/>
                        <stop offset="1" stopColor="#ffb24e"/>
                    </>
                }
            </linearGradient>
        </defs>
        <path style={{ fill: `url(#${gradientId})` }}
              d="M196.25,1080l63.566-172.66L206.562,750.805,313.071,645.91l9.683-119.419,162.99-51.641,64.551-140.4,166.218-62.937L872.264,0H0V1080Z">
            { animateMove && <animate attributeName="d"
                                      values={`M196.25,1080l63.566-172.66L206.562,750.805,313.071,645.91l9.683-119.419,162.99-51.641,64.551-140.4,166.218-62.937L872.264,0H0V1080Z;
                         M196.25,1080l66.094-140.753L196.25,726.024l114.424-48.331L344.79,532.7l152.1-51.173,54.016-174.843,189.058-69.653L872.264,0H0V1080Z;
                         M196.25,1080l87.416-157.811L226.807,758.718,351.9,683.379l22.744-133.62L515.368,473l83.868-163.471,181.95-73.917L872.264,0H0V1080Z;
                         M196.25,1080l63.566-172.66L206.562,750.805,313.071,645.91l9.683-119.419,162.99-51.641,64.551-140.4,166.218-62.937L872.264,0H0V1080Z`}
                                      keyTimes="0; 0.33; 0.66; 1"
                                      calcMode="spline"
                                      keySplines={
                                      `0.5 0 0.5 1;
                                      0.5 0 0.5 1;
                                      0.5 0 0.5 1`
                                  }
                                      begin="0s"
                                      dur="8s"
                                      repeatCount="indefinite"
                                      fill="freeze"
            /> }
        </path>
    </svg>
