import React from "react";
import './Services.css'
import { useNavigate, useParams } from "react-router-dom";
import image from './image.png'
import immage from './immage.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



const services = [
    {
        id: "isolation-system",
        name: "Hidroisolation",
        description: "Additives for concrete Waterproofing using C-S-H Technology",
        url: image
    },
    {
        id: "installation-system",
        name: "Installation System",
        description: "Inka Fixing continues to make your life easier with its structural connections, while making its impact felt in all areas of life. We are with you in all application areas with our smart solutions.",
        url: immage
    },

]

export default function Services() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { local } = useParams()

    return(
        <div id="services" className="Block-2">
            <h1 className="desc">
                <span>{t('main_products')}</span>
            </h1>
            <div className="Services">
                {services.map((service)=>(
                    <div className="Service" onClick={() => {navigate(`/${local}/${service.id}`)}}>
                        <img src={service.url} alt="Service Image" className="service-image" />
                            <div className="descriptions">
                                <h3>{service.name}</h3>
                                <span>{service.description}</span>
                                <button id="bbb">{t('button-view')}</button>
                            </div>

                    </div>
                ) )}
            </div>
            
        </div>
    )
}