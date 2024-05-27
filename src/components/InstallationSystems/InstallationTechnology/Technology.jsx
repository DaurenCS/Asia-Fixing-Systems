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
                <h3><b>WHAT IS CSH TECHNOLOGY</b></h3>
                <p></p>
            </div>
            <div className="descc" id="uses-of-csh">
                <h3><b></b></h3>
                <p>
                </p>
            </div>
                
                
            </section>
        </>
    )
}