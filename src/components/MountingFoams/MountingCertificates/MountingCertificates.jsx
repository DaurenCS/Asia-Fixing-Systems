import React from "react";
// import "./Certificates.css"
import { useTranslation } from "react-i18next";
import { useCertificate } from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from "../../Loader/Loader";
export default function MountingCertificate(){
        const {t} = useTranslation()
        const { loading } = useLoading();
        
        
        const {productList: certificates} = useCertificate("")

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