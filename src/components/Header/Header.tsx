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

const Header = () => {
    return (
        <header>
            <div className="wrapper">
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
                <nav className="menu">
                    <Link to={ CARDIGANS_ROUTE }>Cardigans</Link>
                    <Link to={ DRESSES_ROUTE }>Dresses</Link>
                    <Link to={ SHORTS_ROUTE }>Shorts</Link>
                    <Link to={ SUITS_ROUTE }>Suits</Link>
                    <Link to={ TROUSERS_ROUTE }>Trousers</Link>
                    <Link to={ CATALOG_ROUTE }>Catalog</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;