import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import logo_1 from './logo.png'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../MainPage/LanguageChanger';
export default function InstallationHeader() {
    const navigate = useNavigate();
    const { local } = useParams();
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (path) => {
        navigate(path);
        setMenuOpen(false); // Close the menu after navigating
    };

    return (
        <>  
            <header className='Header'>
                <div className='logo'>
                    <img onClick={() => handleMenuClick(`/${local}`)} id='logo-1' src={logo} alt="" />
                    <img onClick={() => handleMenuClick(`/${local}/installation-system`)} id='logo_2' src={logo_1} alt="" />
                </div>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <div className={`info ${menuOpen ? 'open' : ''}`}>
                    <div className='products' onClick={() => handleMenuClick(`/${local}/installation-system/products`)}>
                        <p><b>{t('main_products')}</b></p>
                    </div>
                    <div className='Technology' onClick={() => handleMenuClick(`/${local}/installation-system/technology`)}>
                        <p><b>{t('tech')}</b></p>
                    </div>
                    <div className='certificats' onClick={() => handleMenuClick(`/${local}/installation-system/certificates`)}>
                        <p><b>{t('certificates')}</b></p>
                    </div>
                    <div className='contacts-installation'>
                        <button onClick={() => handleMenuClick(`/${local}/contacts`)} id="bbb">{t('contact_us')}</button>
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>
        </>
    );
}