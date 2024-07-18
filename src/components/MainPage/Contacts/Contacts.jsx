import React from "react";
import "./Contacts.css"
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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
                    <img src="https://asiafix-pro.com/media/uploads/phone.png" alt="" />
                    <h3><a href="tel:+77017514888">+7(701)751-48-88</a></h3>
                </div>
                <div className="contacts-details">
                    <img src="https://asiafix-pro.com/media/uploads/mail.png" alt="" />
                    <h3> <a href="mailto:asiafixingsystems@gmail.com">asiafixingsystems@gmail.com</a> </h3>
                </div>
                <div className="contacts-details">
                    <img src="https://asiafix-pro.com/media/uploads/location.png" alt="" />
                    <h3><a href="https://go.2gis.com/eoxlp"><address>{t('contact-address')}</address></a></h3>
                </div>
                
                   
                 </div>
            </div>
            <div className="contact-image">
                <YMaps>
                    <div>
                    <Map  width="100wh" height="400px" defaultState={{ center: [43.182755, 76.8174], zoom: 15,  controls: ["zoomControl", "fullscreenControl"],  }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[43.182369, 76.816440]} />
                    </Map>
                    
                    </div>
                </YMaps>
            </div>
            
            
            

        </div>
    )
}