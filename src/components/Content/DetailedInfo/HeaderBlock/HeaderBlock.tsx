import React, {FC} from 'react';
import './HeaderBlock.scss'
import {useTranslation} from "react-i18next";

interface HeaderProps{
    ru: string,
    en: string
}

const HeaderBlock:FC<HeaderProps> = (name) => {
    const {t, i18n} = useTranslation();

    return (
        <div className='headerBlock'>
            <div className="headerBlock_container">
                <div className="headerBlock_content">
                    <div className="headerBlock_item">
                        {i18n.language === 'ru' ? name.ru : name.en}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;