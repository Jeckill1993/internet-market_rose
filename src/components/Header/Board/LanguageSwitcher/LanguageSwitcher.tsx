import React, {useState} from 'react';
import classes from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState<string>('UA');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickHandler = ():void => {
        setIsOpen(!isOpen);
    }

    const changeHandler = (chosenLanguage: string):void => {
        setLanguage(chosenLanguage);
        setIsOpen(false);
    }

    return (
        <div className={[classes.board_item, classes.language].join(' ')}>
            <div className={classes.language_btn} onClick={ clickHandler }>
                <span className={classes.language_btn_text}>{language}</span>
                <span className={[classes.language_btn_icon, isOpen ? classes.isOpened : ''].join(' ')}></span>
            </div>
            <div className={[classes.language_list, isOpen ? classes.isOpened : ''].join(' ')}>
                <p className={classes.language_list_item} onClick={() => { changeHandler('UA') }}>UA</p>
                <p className={classes.language_list_item} onClick={() => { changeHandler('RU') }}>RU</p>
                <p className={classes.language_list_item} onClick={() => { changeHandler('EN') }}>EN</p>
            </div>
        </div>
    );
};

export default LanguageSwitcher;