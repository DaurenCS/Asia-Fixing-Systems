import React, { useEffect } from "react";
import './MountingSystems.css';
// import InstallationServices from "../InstallationServices/Services";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';
import { useFoamsCategories, useTypes } from "../../../hooks/views";
import { useNavigate, useParams } from "react-router-dom";
import YouTubeVideo from "../../MainPage/YoutubeVideo";
import { useTranslation } from "react-i18next";
import { inst_types } from "../../../products";
import IsolationServices from "../../HidroIsolation/IsolationServices/Services";
import InstallationServices from "../../InstallationSystems/InstallationServices/Services";
// import video from "./main_inka.mp4";

export default function MountingSystem() {
    const { local } = useParams();

    // const { typelist: types } = useTypes(local);
    const {typelist: foams } = useFoamsCategories(local)
    const { loading, setLoading } = useLoading();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        
        const videoElement = document.getElementById('video-container');
        if (videoElement) {
            videoElement.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }

    }, [setLoading]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="main-page-installation-system">
                    <div className="foam-image">
                        <div className="video">
                            {/* <img src="https://sealaxpro.com/images/banner_sealax_main1.png" alt="" /> */}
                            {/* <video autoPlay loop muted playsInline id="video-container">
                                <source src={video} type="video/mp4" />
                            </video> */}
                            <div className="video-overlay"></div>
                        </div>     
                    </div>
                    <div className="description">
                        <h1>{t('mounting-desc')}</h1>
                        <div className="Buttons-1">
                            <a href="#Container-3"><button id="bbb">{t('view-products')}</button></a>
                            
                        </div>
                    </div>
                    <div id="youtube-video" className="youtube-video">
                        <div className="youtube-video-1">
                            <div className="descr">
                                <h1>{t('mounting-about')}</h1>
                                <p>{t('mounting-about-desc1')}</p>
                                <p>{t('mounting-about-desc2')}</p>
                            </div>
                            <div className="image">
                                <img src="https://sealaxpro.com/images/brand.svg" alt="" />
                            </div>
                        </div>
                        

                        
                    </div>
                    <div className="foams-product">
                        <h1>{t('catalog')}</h1>
                        </div>
                    <div id="Container-3" className="foams-categories">
                    {foams.map((product) => (
                            <div
                                key={product.id}
                                className="foams-category"
                                onClick={() => {
                                navigate(`/${local}/mounting-foams/products/${product.id}`, {state: product});
                                }}
                            >
                                <img src={product.description} alt="" />
                                <div className="descrr">
                                <h3><b>{product.name}</b></h3>
                                <div className="icon">
                                    <button className="button"><span>{t('see-products')}</span></button>
                                </div>
                                </div>
                            </div>
                            ))}
                    </div>
                    <div className="ending">
                        <div className="logo-icon">
                            <div>TOO "Asia Fixing Systems"</div>
                        </div>
                        <div className="contacts-icons">
                            <a href="https://www.linkedin.com/company/asia-fixing-systems/">
                                <img src="https://asiafix-pro.com/media/uploads/in.png" alt="LinkedIn" />
                            </a>
                            <a href="https://wa.me/77059604407">
                                <img src="https://asiafix-pro.com/media/uploads/whatsapp.png" alt="WhatsApp" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
