import React, {Dispatch, FC, SetStateAction} from 'react';

import classes from './Modal.module.css';
import SearchModal from "../SearchModal/SearchModal";
import FavoritesModal from "../FavoritesModal/FavoritesModal";
import BasketModal from "../BasketModal/BasketModal";

interface ModalProps {
    modalTemplateName: string | null;
    isOpened: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>,
    setModalTemplateName: Dispatch<SetStateAction<string>>,

}

const Modal:FC<ModalProps> = (props) => {
    const { modalTemplateName, isOpened, setIsOpenModal, setModalTemplateName } = props;

    const clickHandler = () => {
        setIsOpenModal(!isOpened);
        setModalTemplateName('');
    }

    const modalTemplate = (modalTemplateName: string | null, isOpened: boolean): React.ReactNode | null => {
        if (!isOpened) return;

        let template:React.ReactNode | null;

        switch (modalTemplateName) {
            case 'searchModal':
                template = <SearchModal clickHandler={clickHandler}/>
                break;
            case 'favoritesModal':
                template = <FavoritesModal clickHandler={clickHandler}/>
                break;
            case 'basketModal':
                template = <BasketModal clickHandler={clickHandler}/>
                break;
        }

        return template;
    }

    return (
        <div className={classes.modal}>
            <div className={classes.modal_overlay} onClick={clickHandler}></div>
            { modalTemplate(modalTemplateName, isOpened) }
        </div>
    );
};

export default Modal;