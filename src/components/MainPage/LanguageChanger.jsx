import React, { useState } from 'react';
import './LanguageChanger.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        window.location.href = `/${lang}`;
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={`language-switcher ${dropdownOpen ? 'show' : ''}`}>
            <button className="language-button" onClick={toggleDropdown}>
                {i18n.language.toUpperCase()} <span>&#9662;</span> {/* Unicode for down arrow */}
            </button>
            <div className="language-dropdown">
                <a href="#" onClick={() => handleLanguageChange('en')}>EN</a>
                <a href="#" onClick={() => handleLanguageChange('ru')}>RU</a>
                {/* Add more languages as needed */}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
