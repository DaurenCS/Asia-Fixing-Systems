import React from "react";
import './Services.css'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useTechnologies } from "../../../hooks/views";





export default function Services({services}) {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { local } = useParams()
    // const services = useServices(local)

    return(
        <div id="services" className="Block-2">
            <h1 className="desc">
                <span>{t('main_products')}</span>
            </h1>
            <div className="main-services">
                <div className="Services">
                    {services.map((service)=>(
                        <div className="Service" onClick={() => {navigate(`/${local}/${service.name}`)}}>
                            <img src={service.image} alt="Service Image" className="service-image" />
                                <div className="descriptions">
                                    <h3>{service.description}</h3>
                                    <span>{service.text}</span>
                                    <button id="bbb">{t('button-view')}</button>
                                </div>

                        </div>
                    ) )}
                </div>
            </div>
            
            
        </div>
    )
}