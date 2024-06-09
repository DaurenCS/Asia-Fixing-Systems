import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../MainPage/LanguageChanger';

export default function IsolationHeader() {
    
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { local } = useParams()
    return(
        <>  
            <header className='Header'>
                <div className='logo'>

                    <img onClick={() => {navigate(`/${local}`)}} id= 'logo-1' src={logo} alt="" />
                    <img onClick={() => {navigate(`/${local}/isolation-system`)}} id='logo-2' src="https://krystaline.es/wp-content/uploads/2023/10/logo-negro-krystaline-172x32px.png  " alt="" />
                </div>
                <div className='info'>
                    <div className='products' onClick={() => {navigate(`/${local}/isolation-system/products`)}}>
                        <p><b>{t('main_products')}</b></p>
                    </div>
                    <div className='Technology' onClick={() => {navigate(`/${local}/isolation-system/technology`)}}>
                        <p><b>{t('tech')}</b></p>
                    </div>
                    <div className='certificats' onClick={() => {navigate(`/${local}/isolation-system/certificates`)}}>
                        <p><b>{t('certificates')}</b></p>
                    </div>
                    <div className='contacts' id='contacts-3' >
                        <button onClick={() => {navigate(`/${local}/contacts`)}} id="bbb">{t('contact_us')}</button>
                        <LanguageSwitcher />

                    </div>         

                </div>
            </header>
        </>
    )

}