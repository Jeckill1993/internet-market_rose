import React, {Dispatch, FC, SetStateAction} from 'react';

import classes from './Modal.module.css';
import SearchModal from "../SearchModal/SearchModal";
import FavoritesModal from "../FavoritesModal/FavoritesModal";
import BasketModal from "../BasketModal/BasketModal";
import {useDispatch, useSelector} from "react-redux";
import {ModalStatesTypes} from "../../../types/modal-states-types";
import {closeModalAction} from "../../../redux/reducers/modalReducer";
import {AppDispatch, RootState} from "../../../redux/store";

interface ModalProps {}

const Modal:FC<ModalProps> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const modals = useSelector((state: RootState): ModalStatesTypes => state.modals);

    const { isOpened, openedModalComponent } = modals;

    const clickHandler = () => {
        dispatch(closeModalAction());
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
            { modalTemplate(openedModalComponent, isOpened) }
        </div>
    );
};

export default Modal;