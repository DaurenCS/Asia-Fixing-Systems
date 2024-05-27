import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from './logoo.png';
import LanguageSwitcher from '../LanguageChanger';
import { useTranslation } from 'react-i18next';

function Header() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
 
    const handleNavigation = (e, targetId) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        const currentLang = i18n.language;
        const localizedRoot = `/${currentLang}`;

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
        <StickyBox offsetTop={0} offsetBottom={10}>
            <header className="header">
                <div className="logo">
                    <Link to={`/${i18n.language}`}>
                        <div className="logo-container">
                            <div className="logo-icon">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="user-info">
                    <a href="#main" onClick={(e) => handleNavigation(e, 'main')}>{t('main')}</a>
                    <a href="#services" onClick={(e) => handleNavigation(e, 'services')}>{t('main_products')}</a>
                    <a href="#company" onClick={(e) => handleNavigation(e, 'company')}>{t('about-us')}</a>
                    
                    <div className='button-header'>
                        <a href="#contacts" onClick={(e) => handleNavigation(e, 'contacts')}><button id="bbb">{t('contact_us')}</button></a>

                    </div>

                </div>
                <LanguageSwitcher />



            </header>
        </StickyBox>
    );
}

export default Header;
