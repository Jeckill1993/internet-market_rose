import React from 'react';

import classes from './CartStatus.module.css';

import IconEditing from '../../../assets/images/admin/icon-editing.png';

const CartStatus = () => {

    return (
        <div className={classes.status}>
            <div className="row">
                <div className={classes.status__icon}>
                    <img src={IconEditing} alt="editing or creating new cart"/>
                </div>
                <p className={classes.status__text}>Editing</p>
            </div>
        </div>

    );
};

export default CartStatus;