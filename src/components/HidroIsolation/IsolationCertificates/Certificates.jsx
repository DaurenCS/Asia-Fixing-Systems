import React from "react";
import { useTranslation } from "react-i18next";

export default function IsolationCertificate(){
        const {t} = useTranslation()

    return(
            <section className="Certificates">
                
                    <h1>{t('certificates')}</h1>
                
            </section>
    )
}