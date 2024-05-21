import React from "react";
import './Services.css'
import { useNavigate } from "react-router-dom";
import image from './image.png'
import immage from './immage.jpg'
import { Link } from 'react-router-dom';



const services = [
    {
        id: "isolation-system",
        name: "Гидроизоляция",
        description: "ДОБАВКИ ДЛЯ ГИДРОИЗОЛЯЦИИ БЕТОНА ПО ТЕХНОЛОГИИ CSH",
        url: image
    },
    {
        id: "installation-system",
        name: "Монтажные системы",
        description: "Inka Fixing continues to make your life easier with its structural connections, while making its impact felt in all areas of life. We are with you in all application areas with our smart solutions.",
        url: immage
    },

]

export default function Services() {
    const navigate = useNavigate()

    return(
        <div id="services" className="Block-2">
            <h1 className="desc">
                <span>Products</span>
            </h1>
            <div className="Services">
                {services.map((service)=>(
                    <div className="Service" onClick={() => {navigate("/"+service.id)}}>
                        <img src={service.url} alt="Service Image" className="service-image" />
                            <div className="descriptions">
                                <h3>{service.name}</h3>
                                <span>{service.description}</span>
                            </div>
                    </div>
                ) )}
            </div>
            
        </div>
    )
}