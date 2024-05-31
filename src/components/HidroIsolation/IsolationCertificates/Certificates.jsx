import React from "react";
import { useTranslation } from "react-i18next";
import { useCertificate } from "../../../hooks/views";
import { useNavigate } from "react-router-dom";
import "./Certificate.css"
import { useLoading } from "../../Loader/LoadingContext";
import Loader from "../../Loader/Loader";

export default function IsolationCertificate(){
        const {t} = useTranslation()
        const navigate = useNavigate()
        const { loading } = useLoading();
        
        const {productList: certificates} = useCertificate("isolation")

    return(
        <>
        {loading ? (<Loader/>):(
                 <section className="Certificates">
                
                 <h1>{t('certificates')}</h1>
                 
                 <div className="certificate">
                     {certificates.map((service)=>(
                             <a href={service.file_path}>
                                     <div className="certificate-desc" >
                                             <img className="pdf" src="https://inkafixing.com/Uploads/images/file-icons/pdf.png" alt="" />
                                             <div className="certificate-info">
                                                     <h3>{service.name}</h3>
                                             </div>
                                             <img className="download" src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" alt="" />
                                     </div>
                             </a>
                     
                     ) )}
                 </div>


             
         </section>
 
        )}
        </>
    )
}