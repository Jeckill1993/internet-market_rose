import React from 'react';
import {Link} from "react-router-dom";
import {
    CARDIGANS_ROUTE,
    CATALOG_ROUTE,
    DRESSES_ROUTE,
    MAIN_ROUTE,
    SHORTS_ROUTE,
    SUITS_ROUTE,
    TROUSERS_ROUTE
} from "../../utils/const";

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.flag}>
                <div className="row">
                    <div className={classes.flag_blue}></div>
                    <div className={classes.flag_yellow}></div>
                </div>
            </div>
            <div className="wrapper wrapper_max">
                <div className="row">
                    <div className="language">EN</div>
                    <div className="logo">
                        <Link to={ MAIN_ROUTE }>ROZE</Link>
                    </div>
                    <div className="info">
                        <div className="search">Search</div>
                        <div className="favoritesLink">FavoritesLink</div>
                        <div className="basketLink">BasketLink</div>
                    </div>
                </div>
                <nav className={classes.menu}>
                    <Link to={ CARDIGANS_ROUTE } className={classes.menu_link}>Cardigans</Link>
                    <Link to={ DRESSES_ROUTE } className={classes.menu_link}>Dresses</Link>
                    <Link to={ SHORTS_ROUTE } className={classes.menu_link}>Shorts</Link>
                    <Link to={ SUITS_ROUTE } className={classes.menu_link}>Suits</Link>
                    <Link to={ TROUSERS_ROUTE } className={classes.menu_link}>Trousers</Link>
                    <Link to={ CATALOG_ROUTE } className={classes.menu_link}>Catalog</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;