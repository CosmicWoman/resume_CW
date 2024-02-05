import React, {useEffect, useState} from 'react';
import './Header.scss'
import Translation from "./Translation/translation";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import {useDispatch, useSelector} from "react-redux";


const Header = () => {
    const theme = useSelector((state:any) => state.theme)

    return (
        <div className="header">
            <div className="container header__container">
                <div className={(theme === 'dark') ? "header__content-light" : "header__content-dark"}>
                    <ThemeSwitch/>
                    <Translation/>
                </div>
            </div>
        </div>
    );
};

export default Header;