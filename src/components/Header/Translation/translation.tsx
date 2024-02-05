import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import './translation.scss'
import {useDispatch, useSelector} from "react-redux";

const Translation = () => {
    const {t, i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('ru')
    const theme = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()

    const changeLanguage = (language: string) => {
        if (language !== currentLanguage) {

            if (theme === 'light') {
                document.querySelector(`#${currentLanguage}`)?.classList.remove('languageChanger__btn-dark_active')
            } else {
                document.querySelector(`#${currentLanguage}`)?.classList.remove('languageChanger__btn_active');
            }
            i18n.changeLanguage(language);
            setCurrentLanguage(i18n.language);
        }
    }

    useEffect(() => {
        themeChange()
        classActive()
    }, [])

    useEffect(() => {
        classActive()
        themeChange()
    }, [currentLanguage, theme])


    function themeChange() {
        let btn = document.querySelectorAll('button')
        if (theme === 'light') {
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.remove('languageChanger__btn')
                btn[i].classList.add('languageChanger__btn-dark')
                if (btn[i].id === currentLanguage) {
                    btn[i].classList.remove('languageChanger__btn_active')
                    btn[i].classList.add('languageChanger__btn-dark_active')
                }
            }
        } else {
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.add('languageChanger__btn')
                btn[i].classList.remove('languageChanger__btn-dark')
                if (btn[i].id === currentLanguage) {
                    btn[i].classList.add('languageChanger__btn_active')
                    btn[i].classList.remove('languageChanger__btn-dark_active')
                }
            }
        }
    }

    function classActive() {
        if (theme === 'light') {
            document.getElementById(`#${currentLanguage}`)?.classList.add('languageChanger__btn-dark_active');
        } else {
            document.getElementById(`#${currentLanguage}`)?.classList.add('languageChanger__btn_active');
        }
    }

    return (
        <div className='container languageChanger'>
            <div className='languageChanger__block'>
                <button
                    className='languageChanger__btn-1'
                    id='en'
                    onClick={() => changeLanguage('en')}>
                    EN
                </button>
                <button
                    className='languageChanger__btn-2'
                    id='ru'
                    onClick={() => changeLanguage('ru')}>
                    RU
                </button>
            </div>
        </div>
    )
}

export default Translation;