import React, { useEffect } from "react";
import './MainPage.css';
import InstallationServices from "../InstallationServices/Services";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';
import { useTypes } from "../../../hooks/views";
import { useNavigate, useParams } from "react-router-dom";
import YouTubeVideo from "../../MainPage/YoutubeVideo";
import { useTranslation } from "react-i18next";
import { inst_types } from "../../../products";
import video from "./main_inka.mp4";

export default function InstallationSystem() {
    const { local } = useParams();
    const { typelist: types } = useTypes(local);
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
                    <div className="video">
                        <video autoPlay loop muted playsInline id="video-container">
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="video-overlay"></div>
                    </div>
                    <div className="description">
                        <h1>{t('installation-desc')}</h1>
                        <div className="Buttons-1">
                            <button id="bbb" onClick={() => {navigate(`/${local}/installation-system/products`)}}>{t('view-products')}</button>
                        </div>
                    </div>
                    <div className="youtube-video">
                        <h1>{t('isolation-benefits')}</h1>
                        <YouTubeVideo videoId="ZdKlDBbCwrE" />
                    </div>
                    <InstallationServices types={types} />
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
