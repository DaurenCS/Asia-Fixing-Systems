import React, { useEffect } from "react";
import './MainPage.css';
import InstallationServices from "../InstallationServices/Services";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';
import { useTypes } from "../../../hooks/views";
import { useNavigate, useParams } from "react-router-dom";
import YouTubeVideo from "../../MainPage/YoutubeVideo";
import { useTranslation } from "react-i18next";

export default function InstallationSystem() {
    const {local} = useParams() 
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true)

    }, []);
    const { typelist: types } = useTypes();
    const { loading, setLoading} = useLoading();
    const navigate = useNavigate()
    const { t } = useTranslation()
    

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="main-page-installation-system">
                    <div className="video">
                        <video autoPlay loop muted id="video-container">
                            <source src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4" type="video/mp4" />
                        </video>
                        <div class="video-overlay"> </div>
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
                    <InstallationServices types={types}  />
                    <div>
                        <>2024</>
                        
                    </div>
                </div>
            )}
        </>
    );
}
