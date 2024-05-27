import React from "react";
import './Company.css'
import image from './logo.jpg'
import { useTranslation } from "react-i18next";

export const text = "Our vision at Asia Fixing System is to revolutionize the construction industry with advanced building materials and cutting-edge technologies. We strive to be the leading supplier of innovative products and services that enable our clients to complete their projects with greater efficiency, sustainability, and cost-effectiveness. Through our commitment to quality, customization, and customer satisfaction, we aim to be the partner of choice for all construction-related needs."

export default function Company(){
    const { t } = useTranslation()
    return(
        <div id="company" className="Company">
            <div className="descriptions-company">
                <div className="block-3">
                    <h2 className="about-us">{t('about-us')}</h2>
                    <div className="vision">
                        <h2>{t('vision')}</h2>
                    </div>
                    <div className="text-decs">
                        <span className="text">{t('vision-text')}</span>
                        <h3>aaa@gmail.com</h3>
                    </div>
                    <div className="contacts-icons">
                        <a href="https://www.instagram.com/kozhakhmet_off/">
                            <img src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/company/asia-fixing-systems/">
                            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="" />
                        </a>
                        <a href="https://wa.me/77476756477">
                            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536479.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="team-story">
                <img src={image} alt="" className="company-image" />
                <div className="team-story-text">
                    <div className="vision">
                        <h2>{t('team-story')}</h2>
                    </div>
                    <div className="text-1">
                        {t('team-text')}
                    </div>
                </div>
            </div>  

            <div className="members">
                
            </div>
        </div>
    )
}