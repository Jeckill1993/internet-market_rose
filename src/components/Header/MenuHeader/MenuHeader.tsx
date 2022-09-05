import React from 'react';
import classes from "./MenuHeader.module.css";
import {Link} from "react-router-dom";
import {
    CARDIGANS_ROUTE,
    CATALOG_ROUTE,
    DRESSES_ROUTE,
    SHORTS_ROUTE,
    SUITS_ROUTE,
    TROUSERS_ROUTE
} from "../../../utils/const";

const MenuHeader = () => {
    return (
        <nav className={classes.menu}>
            <div className="wrapper wrapper_medium">
                <div className={classes.menu_navigation}>
                    <Link to={ CARDIGANS_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Cardigans</span>
                    </Link>
                    <Link to={ DRESSES_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Dresses</span>
                    </Link>
                    <Link to={ SHORTS_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Shorts</span>
                    </Link>
                    <Link to={ SUITS_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Suits</span>
                    </Link>
                    <Link to={ TROUSERS_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Trousers</span>
                    </Link>
                    <Link to={ CATALOG_ROUTE } className={classes.menu_link}>
                        <span className={classes.menu_link__text}>Catalog</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MenuHeader;