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
                    <h3><a href="tel:+77059604407">+7(705)960-44-07</a></h3>
                </div>
                <div className="contacts-details">
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684869.png" alt="" />
                    <h3> <a href="mailto:asiafixingsystems@gmail.com">asiafixingsystems@gmail.com</a> </h3>
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