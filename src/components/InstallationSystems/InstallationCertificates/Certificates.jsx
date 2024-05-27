import React from "react";
import "./Certificates.css"
import { useTranslation } from "react-i18next";
export default function InstallationCertificate(){
    const {t} = useTranslation()

    return(
            <section className="Certificates">
                
                    <h1>{t('certificates')}</h1>
                
            </section>
    )
}