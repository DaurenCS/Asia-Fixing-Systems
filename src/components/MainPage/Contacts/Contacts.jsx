import React from "react";
import "./Contacts.css"
import { useTranslation } from "react-i18next";
export default function Contacts(){

    const { t } = useTranslation()
    return(
        <div id="contacts" className="Contacts">
            
            <div className="contact-description">
                <h1 >
                    <span>{t('contact-description')}</span>
                </h1>
                <p>{t('contact-text')}</p>
                
                <div className="contact-details">

                <div className="contacts-details">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684853.png" alt="" />
                    <h3>+7(747)675-64-77</h3>
                </div>
                <div className="contacts-details">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684869.png" alt="" />
                    <h3>d_kozhakhmetov@kbtu.kz</h3>
                </div>
                <div className="contacts-details">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684850.png" alt="" />
                    <h3><address>{t('contact-address')}</address></h3>
                </div>
                   
                 </div>
            </div>
            <div className="contact-image">
                <img src="https://media-public.canva.com/eWcvE/MAEmn_eWcvE/1/s2.jpg" alt="" />
            </div>
            
            
            

        </div>
    )
}