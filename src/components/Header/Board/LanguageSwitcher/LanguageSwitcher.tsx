import React, {useState} from 'react';
import classes from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState<string>('UA');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickHandler = ():void => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={[classes.board_item, classes.language].join(' ')}>
            <div className={classes.language_btn} onClick={ clickHandler }>
                <span className={classes.language_btn_text}>{language}</span>
                <span className={[classes.language_btn_icon, isOpen ? classes.isOpened : ''].join(' ')}></span>
            </div>
            <div className={[classes.language_list, isOpen ? classes.isOpened : ''].join(' ')}>
                <p className={classes.language_list_item}>UA</p>
                <p className={classes.language_list_item}>RU</p>
                <p className={classes.language_list_item}>EN</p>
            </div>
        </div>
    );
};

export default LanguageSwitcher;