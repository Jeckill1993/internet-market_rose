import React, {FC} from 'react';

import classes from './SearchModal.module.css';

interface SearchModalProps {
    clickHandler: () => void;
}

const SearchModal:FC<SearchModalProps> = ({ clickHandler }) => {
    return (
        <div>
            SearchModal
            <div onClick={ clickHandler }></div>
        </div>
    );
};

export default SearchModal;