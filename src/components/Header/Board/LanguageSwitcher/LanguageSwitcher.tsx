import React, {useState} from 'react';
import classes from "./LanguageSwitcher.module.css";
import {useDispatch, useSelector} from "react-redux";
import {BoardStateTypes} from "../../../../types/board-state-types";
import {chooseLanguageAction} from "../../../../redux/reducers/boardSettingReducer";

const LanguageSwitcher = () => {
    const dispatch = useDispatch();
    const { availableLanguages, language } = useSelector((state: any):BoardStateTypes => state.boardSettings);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickHandler = ():void => {
        setIsOpen(!isOpen);
    }
    const changeHandler = (chosenLanguage: string):void => {
        dispatch(chooseLanguageAction(chosenLanguage));
        setIsOpen(false);
    }

    return (
        <div className={[classes.board_item, classes.language].join(' ')}>
            <div className={classes.language_btn} onClick={ clickHandler }>
                <span className={classes.language_btn_text}>{language}</span>
                <span className={[classes.language_btn_icon, isOpen ? classes.isOpened : ''].join(' ')}></span>
            </div>
            <div className={[classes.language_list, isOpen ? classes.isOpened : ''].join(' ')}>
                { availableLanguages.map((lang) =>
                    <p key={lang} className={classes.language_list_item}
                       onClick={() => { changeHandler(lang) }}>{ lang }</p>
                ) }
            </div>
        </div>
    );
};

export default LanguageSwitcher;