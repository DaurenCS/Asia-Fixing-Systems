import React from "react";
import './Technology.css'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function InstallationTechnology(){

    const navigate = useNavigate()
    const {t} = useTranslation()
    const { local } = useParams()
    return(
        <>
            <section className="installation-technology-elements">
                <div className="installation-technology">
                    <div className="installation-technology-description">
                        <h1>{t('solution')}</h1> 
                        <button id="bbb" onClick={() => {navigate(`/${local}/contacts`)}}>{t('request')}</button>
                    </div>
                </div>
                <div id="Description" className="descc">
                <h3><b>INKA FIXING TECHNOLOGY</b></h3>
                <p>{t('inka-tech-desc-1')}</p>
            </div>
            <div className="descc" id="uses-of-csh">
                <h3><b>USES OF INKA FIXING TECHNOLOGY</b></h3>
                <p>
                    {t('inka-tech-desc-2')}
                </p>
            </div>
                
                
            </section>
        </>
    )
}