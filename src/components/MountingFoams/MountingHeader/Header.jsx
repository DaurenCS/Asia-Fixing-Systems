import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../MainPage/LanguageChanger';

export default function MountingHeader() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { local } = useParams();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (path) => {
        navigate(path);
        setMenuOpen(false); // Close the menu after navigating
    };

    const handleNavigation = (e, targetId) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        const currentLang = i18n.language;
        const localizedRoot = `/${currentLang}/mounting-foams`;

        if (currentPath !== localizedRoot) {
            navigate(localizedRoot, { state: { targetId } });
        } else {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>  
            <header className='Header'>
                <div className='logo'>
                    <img onClick={() => { navigate(`/${local}`) }} id='logo-1' src={logo} alt="" />
                    <img width="300px"  onClick={() => { navigate(`/${local}/mounting-foams`) }} id='sealax' src="https://sealaxpro.com/templates/sealax/img/logo.svg" alt="" />
                </div>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <div className={`info ${menuOpen ? 'open' : ''}`}>
                    <div className='products'>
                        <a href="#Container-3"  onClick={(e) => handleNavigation(e, 'Container-3')}><p><b>{t('main_products')}</b></p></a>
                    </div>
                    <div className='Technology'>
                        <a href="#youtube-video"  onClick={(e) => handleNavigation(e, 'youtube-video')}> <p><b>{t('tech')}</b></p></a>     
                    </div>
                    <div className='certificats' onClick={() => { handleMenuClick (`/${local}/mounting-foams/certificates`) }}>
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