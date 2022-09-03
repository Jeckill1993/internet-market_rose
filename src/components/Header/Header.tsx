import React from 'react';

import classes from './Header.module.css';
import Menu from "./Menu/Menu";
import Board from "./Board/Board";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.flag}>
                <div className="row">
                    <div className={classes.flag_blue}></div>
                    <div className={classes.flag_yellow}></div>
                </div>
            </div>
            <Board/>
            <Menu/>
        </header>
    );
};

export default Header;