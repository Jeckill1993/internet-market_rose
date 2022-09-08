import React, {FC} from 'react';

import classes from './FavoritesModal.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {CatalogProductsStateType} from "../../../types/catalog-products-types";

interface FavoritesModalProps {
    clickHandler: () => void;
}

const FavoritesModal:FC<FavoritesModalProps> = ({ clickHandler }) => {
    const dispatch = useDispatch<AppDispatch>();
    const catalog = useSelector((state: RootState): CatalogProductsStateType => state.catalog);

    return (
        <div className={classes.modal_content}>
            <h2 className={classes.modal__title}>Favorites:</h2>
            <div className={classes.modal_list}>
                {
                    catalog.favorite.map((product) => {
                        return <div key={product.productId}>{ product.name }</div>
                    })
                }
            </div>
            <div className={classes.modal_close} onClick={ clickHandler }></div>
        </div>
    );
};

export default FavoritesModal;