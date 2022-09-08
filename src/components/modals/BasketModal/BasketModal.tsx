import React, {FC} from 'react';

import classes from './BasketModal.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {CatalogProductsStateType} from "../../../types/catalog-products-types";

interface BasketModalProps {
    clickHandler: () => void;
}

const BasketModal:FC<BasketModalProps> = ({ clickHandler }) => {
    const dispatch = useDispatch<AppDispatch>();
    const catalog = useSelector((state: RootState): CatalogProductsStateType => state.catalog);

    return (
        <div className={classes.modal_content}>
            <h2 className={classes.modal__title}>Your order:</h2>
            <div className={classes.modal_list}>
                {
                    catalog.basket.map((product) => {
                        return <div key={product.productId}>{ product.name }</div>
                    })
                }
            </div>
            <div className={classes.modal_close} onClick={ clickHandler }></div>
        </div>
    );
};

export default BasketModal;