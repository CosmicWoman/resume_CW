import React from 'react';
import './Header.scss'
import Translation from "./Translation/translation";

const Header = () => {
    return (
        <div className="header">
            <div className="container header__container">
                <div className="header__content">
                    <Translation/>
                </div>
            </div>
        </div>
    );
};

export default Header;