import React from "react";
import './Technology.css'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Technology(){
    const navigate = useNavigate()
    const {t} = useTranslation()
    const { local } = useParams()



    return (
        <>
            <div className="Technology-1">
                <h1><b>{t('isolation-tech')}</b></h1>
                <button id="bbb" onClick={() => {navigate(`/${local}/contacts`)}}>{t('request')}</button>
            </div>
            <div id="Description" className="descc">
                <h3><b>{t('CSH-tech')}</b></h3>
                <p>{t('CSH-tech-desc')}</p>
            </div>
            <div className="descc" id="uses-of-csh">
                <h3><b>{t('uses-csh-tech')}</b></h3>
                <p>
                    {t('uses-csh-desc')}
                </p>
            </div>
            
        </>
    )
}