import React from 'react';
import './Footer.scss'
import {useSelector} from "react-redux";

const Footer = () => {
    const theme = useSelector((state:any) => state.theme)

    return (
        <div className="footer">
            <div className="container footer__container">
                <div className={(theme === 'light') ? "footer__content-dark" : "footer__content"}>
                    <div className="footer__item">
                        <div className="footer__item-text">
                            © Магомедова Наталья Васильевна
                        </div>
                        <div className="footer__item-number">
                            +7-967-673-99-66
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;