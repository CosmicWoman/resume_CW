import React, {FC} from 'react';
import './HeaderBlock.scss'
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

interface HeaderProps{
    ru: string,
    en: string
}

const HeaderBlock:FC<HeaderProps> = (name) => {
    const theme = useSelector((state:any) => state.theme)
    const {t, i18n} = useTranslation();

    return (
        <div className='headerBlock'>
            <div className="headerBlock__container">
                <div className={(theme === 'dark') ? "headerBlock__content" : "headerBlock__content-dark"}>
                    <div className="headerBlock__item">
                        {i18n.language === 'ru' ? name.ru : name.en}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;