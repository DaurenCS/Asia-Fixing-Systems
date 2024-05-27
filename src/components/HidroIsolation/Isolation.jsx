import React ,{useEffect } from "react";
import './Isolation.css'
import Header from "../MainPage/Header/Header";
import IsolationServices from "./IsolationServices/Services";
import { useNavigate, useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Isolation(){
    const { t } = useTranslation()
    const navigate = useNavigate()
    const {local} = useParams()

    const benefits = [
                {
                    description: t('benefit-1')
                },
                {
                    description: t('benefit-2')
                },
                {
                    description: t('benefit-3')
                },
                {
                    description: t('benefit-4')
                },
                {
                    description: t('benefit-5')
                },
                {
                    description: t('benefit-6')
                },
            ]
        
            const main_benegfits = [
                {
                    name: t('benefit-name-1'),
                    url: "https://krystaline.es/wp-content/uploads/2023/10/impermeabilizacion-total_1.png",
                    desc: t('benefit-7')
        
                },
                {
                    name: t('benefit-name-2'),
                    url: "https://krystaline.es/wp-content/uploads/2023/10/catalizador_1.png",
                    desc: t('benefit-8')
        
                }
            ]
            useEffect(() => {
                window.scrollTo(0, 0); 
            }, []);

            return(
                <>
                <div>
                <div className="Container-1">
                    <div className="video">
                        <video autoPlay loop muted id="video">
                            <source src="https://krystaline.es/wp-content/uploads/2023/10/krystaline_aditivoshormigon_impermeabilizacion.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="description-1">
                        <h1>{t('isolation-description')}</h1>
                        <div className="Buttons">
                            <button id="bbb" onClick={() => {navigate(`/${local}/contacts`)}}>{t('button-contacts')}</button>
                    
                            <button id="bbb" onClick={() => {navigate(`/${local}/isolation-system/technology`)}}>{t('about_tech')}</button>
                        </div>
                    </div>  
                </div>
                <div className="Container-2">
                    <div className="benefits-main">
                        <div className="descripion-benefits">
                            <h1>{t('isolation-benefits')}</h1>
                            <h3>{t('admixture')}</h3>
                        </div>
                        <div className="benefits">
                            {benefits.map((benefit) => (
                            <div className="benefit">
                                <p><b>{benefit.description}</b></p>
                            </div>
                            ))}
                        </div>
                        <video autoPlay loop muted id="videodesc" controls>
                            <source src="https://krystaline.es/wp-content/uploads/2024/01/krystaline-krystalineadd1-en.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="benefits">
                        {main_benegfits.map((benefit) => (
                            <div className="benefit-with-image">
                                <img src={benefit.url} alt="" />
                                <h4>{benefit.name}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Container-3">
                        <IsolationServices></IsolationServices>
                </div> 
                <div className="Container-4">
                    {/* <h1>WHY CHOOSE US</h1> */}

                </div> 

                </div>
                
                </>
            )
}
