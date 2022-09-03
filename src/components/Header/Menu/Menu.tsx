import React from 'react';
import classes from "./Menu.module.css";
import {Link} from "react-router-dom";
import {
    CARDIGANS_ROUTE,
    CATALOG_ROUTE,
    DRESSES_ROUTE,
    SHORTS_ROUTE,
    SUITS_ROUTE,
    TROUSERS_ROUTE
} from "../../../utils/const";

const Menu = () => {
    return (
        <nav className={classes.menu}>
            <div className="wrapper wrapper_max">
                <div className={classes.menu_navigation}>
                    <Link to={ CARDIGANS_ROUTE } className={classes.menu_link}>Cardigans</Link>
                    <Link to={ DRESSES_ROUTE } className={classes.menu_link}>Dresses</Link>
                    <Link to={ SHORTS_ROUTE } className={classes.menu_link}>Shorts</Link>
                    <Link to={ SUITS_ROUTE } className={classes.menu_link}>Suits</Link>
                    <Link to={ TROUSERS_ROUTE } className={classes.menu_link}>Trousers</Link>
                    <Link to={ CATALOG_ROUTE } className={classes.menu_link}>Catalog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Menu;