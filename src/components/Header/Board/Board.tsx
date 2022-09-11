import React from 'react';
import {Link} from "react-router-dom";

import {MAIN_ROUTE} from "../../../utils/const";

import classes from "./Board.module.css";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import {useDispatch} from "react-redux";
import {openModalAction} from "../../../redux/reducers/modalReducer";

const Board = () => {

    const dispatch = useDispatch();

    const clickLinkHandler = (modalTemplate: string): void => {
        dispatch(openModalAction(modalTemplate));
    }

    return (
        <div className={classes.board}>
            <div className="wrapper wrapper_max">
                <div className="row row_space-between">
                    <LanguageSwitcher/>
                    <div className={[classes.board_item, classes.logo].join(' ')}>
                        <Link to={MAIN_ROUTE} className={classes.logo_link}>ROZE</Link>
                    </div>
                    <div className={[classes.board_item].join(' ')}>
                        <div className="row row_right">
                            <div className={[classes.modal, classes.modal_search].join(' ')}
                                 onClick={() => { clickLinkHandler('searchModal') }}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                     width="24pt" height="24pt" viewBox="0 0 24.000000 24.000000"
                                     preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0,24) scale(0.100000,-0.100000)"
                                       fill="currentColor" stroke="none">
                                        <path d="M42 215 c-76 -64 -34 -175 66 -175 15 0 33 5 40 12 9 9 20 4 47 -22
44 -42 60 -31 17 13 -23 24 -29 36 -22 47 15 24 11 83 -8 106 -40 50 -95 57
-140 19z m110 -9 c41 -31 41 -101 0 -132 -27 -21 -83 -17 -109 8 -30 28 -31
83 -1 115 24 26 82 31 110 9z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={[classes.modal, classes.modal_favorites].join(' ')}
                                 onClick={() => { clickLinkHandler('favoritesModal') }}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                     width="18.000000pt" height="24.000000pt" viewBox="0 0 18 24">
                                    <g transform="translate(0,24) scale(0.100000,-0.100000)"
                                       fill="currentColor" stroke="none">
                                        <path d="M7 234 c-4 -4 -7 -58 -7 -121 0 -127 4 -132 57 -81 l33 32 33 -32
c54 -52 58 -46 55 86 l-3 117 -80 3 c-45 1 -84 0 -88 -4z m161 -119 l3 -110
-34 33 c-40 39 -56 40 -87 7 -13 -14 -27 -25 -32 -25 -10 0 -11 194 -1 204 4
4 39 5 78 4 l70 -3 3 -110z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={[classes.modal, classes.modal_basket].join(' ')}
                                 onClick={() => { clickLinkHandler('basketModal') }}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                     width="24.000000pt" height="27.000000pt" viewBox="0 0 24.000000 27.000000"
                                     preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,27.000000) scale(0.100000,-0.100000)"
                                       fill="currentColor" stroke="none">
                                        <path d="M74 240 c-5 -25 -11 -30 -35 -30 l-29 0 0 -105 0 -105 110 0 110 0 0
105 c0 104 0 105 -24 105 -18 0 -27 8 -35 30 -6 19 -17 30 -28 30 -17 -1 -17
-1 0 -11 9 -5 17 -19 17 -29 0 -17 -7 -20 -40 -20 -25 0 -40 5 -40 13 0 17 12
33 30 40 10 3 7 6 -8 6 -17 1 -24 -6 -28 -29z m146 -134 l0 -83 -67 -5 c-38
-3 -83 -4 -100 -1 l-33 5 0 84 0 84 100 0 100 0 0 -84z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;