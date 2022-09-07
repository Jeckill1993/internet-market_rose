import React, {FC} from 'react';

import classes from './SearchModal.module.css';

interface SearchModalProps {
    clickHandler: () => void;
}

const SearchModal:FC<SearchModalProps> = ({ clickHandler }) => {
    return (
        <div className={classes.modal_content}>
            <div className={classes.modal_fieldset}>
                <input type='text' className={classes.modal_field}></input>
            </div>
            <div className={classes.modal_close} onClick={ clickHandler }></div>
        </div>
    );
};

export default SearchModal;