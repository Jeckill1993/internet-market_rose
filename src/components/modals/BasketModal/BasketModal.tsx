import React, {FC} from 'react';

import classes from './BasketModal.module.css';

interface BasketModalProps {
    clickHandler: () => void;
}

const BasketModal:FC<BasketModalProps> = ({ clickHandler }) => {
    return (
        <div>
            BasketModal
            <div onClick={ clickHandler }></div>
        </div>
    );
};

export default BasketModal;