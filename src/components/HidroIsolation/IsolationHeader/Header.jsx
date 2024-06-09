import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../MainPage/LanguageChanger';

export default function IsolationHeader() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { local } = useParams();
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
                    <img onClick={() => { navigate(`/${local}`) }} id='logo-1' src={logo} alt="" />
                    <img onClick={() => { navigate(`/${local}/isolation-system`) }} id='logo-2' src="https://krystaline.es/wp-content/uploads/2023/10/logo-negro-krystaline-172x32px.png" alt="" />
                </div>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <div className={`info ${menuOpen ? 'open' : ''}`}>
                    <div className='products' onClick={() => { handleMenuClick (`/${local}/isolation-system/products`) }}>
                        <p><b>{t('main_products')}</b></p>
                    </div>
                    <div className='Technology' onClick={() => { handleMenuClick (`/${local}/isolation-system/technology`) }}>
                        <p><b>{t('tech')}</b></p>
                    </div>
                    <div className='certificats' onClick={() => { handleMenuClick (`/${local}/isolation-system/certificates`) }}>
                        <p><b>{t('certificates')}</b></p>
                    </div>
                    <div className='contacts'>
                        <button onClick={() => { handleMenuClick (`/${local}/contacts`) }} id="bbb">{t('contact_us')}</button>
                        <LanguageSwitcher />
                    </div>
                    
                </div>
            </header>
        </>
    );
}