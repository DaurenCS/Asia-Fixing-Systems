import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import logo_1 from './logo.png'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../MainPage/LanguageChanger';

export default function InstallationHeader() {
    
    const navigate = useNavigate()
    const {local} = useParams()
    const { t } = useTranslation()

    return(
        <>  
            <header className='Header'>
                <div className='logo'>

                    <img onClick={() => {navigate(`/${local}`)}} id= 'logo-1' src={logo} alt="" />
                    <img onClick={() => {navigate(`/${local}/installation-system`)}} id='logo_2' src={logo_1} alt="" />
                </div>
                <div className='info'>
                    <div className='products' onClick={() => {navigate(`/${local}/installation-system/products`)}}>
                        <p><b>{t('main_products')}</b></p>
                    </div>
                    <div className='Technology' onClick={() => {navigate(`/${local}/installation-system/technology`)}}>
                        <p><b>{t('tech')}</b></p>
                    </div>
                    <div className='certificats' onClick={() => {navigate(`/${local}/installation-system/certificates`)}}>
                        <p><b>{t('certificates')}</b></p>
                    </div>
                    <div className='contacts-installation' >
                        <button onClick={() => {navigate(`/${local}/contacts`)}} id="bbb">{t('contact_us')}</button>
                        <LanguageSwitcher />
                    </div>
                    
                        
                        
                        

                </div>

            </header>
        </>
    )

}