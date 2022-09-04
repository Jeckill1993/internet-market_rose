import React, {FC} from 'react';

interface FavoritesModalProps {
    clickHandler: () => void;
}

const FavoritesModal:FC<FavoritesModalProps> = ({ clickHandler }) => {
    return (
        <div>
            FavoritesModal
            <div onClick={ clickHandler }></div>
        </div>
    );
};

export default FavoritesModal;