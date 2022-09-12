import React from 'react';

import classes from './CartControlButton.module.css';

const CartControlButton = () => {
    return (
        <div className={classes['control-button']}>
            <button type="button" className={classes['control-button_save']}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="225" height="225" viewBox="0 0 225 225"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0,225) scale(0.1,-0.1)"
                       fill="currentColor" stroke="none">
                        <path d="M20 2230 c-20 -20 -20 -33 -20 -1105 0 -1074 0 -1085 20 -1105 20
-20 29 -20 1111 -18 1066 3 1091 3 1105 22 12 17 14 151 14 867 l0 848 -22 24
c-19 20 -398 345 -536 460 l-34 27 -809 0 c-796 0 -809 0 -829 -20z m622 -415
l3 -325 28 -27 27 -28 452 -3 c320 -2 460 1 480 9 60 25 63 37 68 346 l5 283
218 -186 217 -187 0 -793 0 -794 -125 0 -125 0 0 449 0 448 -23 34 c-48 72
-17 69 -742 69 -725 0 -694 3 -742 -69 l-23 -34 0 -448 0 -449 -125 0 -125 0
0 1015 0 1015 265 0 264 0 3 -325z m948 25 l0 -300 -420 0 -420 0 0 300 0 300
420 0 420 0 0 -300z m188 -1287 l2 -443 -655 0 -655 0 0 438 c0 241 3 442 7
445 3 4 297 6 652 5 l646 -3 3 -442z m-1366 -235 c13 -36 13 -48 1 -75 -22
-53 -33 -39 -33 42 0 41 4 75 9 75 5 0 16 -19 23 -42z"/>
                        <path d="M1016 1984 c-23 -22 -20 -60 6 -78 18 -13 51 -16 150 -16 l128 0 0
-72 c0 -88 15 -122 53 -126 52 -6 57 8 57 154 0 122 -2 134 -19 144 -11 6 -92
10 -190 10 -141 0 -172 -3 -185 -16z"/>
                        <path d="M802 738 c-20 -20 -14 -65 10 -82 33 -24 593 -24 626 0 24 17 30 62
10 82 -17 17 -629 17 -646 0z"/>
                        <path d="M802 438 c-20 -20 -14 -65 10 -82 33 -24 593 -24 626 0 24 17 30 62
10 82 -17 17 -629 17 -646 0z"/>
                    </g>
                </svg>
            </button>
            <button type="button" className={classes['control-button_cancel']}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="222pt" height="227" viewBox="0 0 222 227"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0,227) scale(0.1,-0.1)"
                       fill="currentColor" stroke="none">
                        <path d="M934 2248 c-162 -127 -921 -765 -926 -779 -4 -10 -4 -28 0 -38 6 -17
885 -792 939 -828 14 -9 33 -13 48 -9 48 12 49 29 10 278 -20 127 -34 233 -32
235 3 2 51 -4 108 -13 277 -44 474 -138 630 -301 158 -165 249 -366 299 -658
19 -109 32 -135 68 -135 35 0 52 23 76 103 131 435 53 846 -226 1183 -206 248
-542 449 -862 515 -48 10 -90 20 -92 22 -2 2 12 90 31 197 19 106 35 197 35
202 0 15 -40 48 -59 48 -10 0 -31 -10 -47 -22z"/>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default CartControlButton;