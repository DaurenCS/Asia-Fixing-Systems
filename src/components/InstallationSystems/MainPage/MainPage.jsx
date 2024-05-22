import React, { useEffect } from "react";
import './MainPage.css';
import InstallationServices from "../InstallationServices/Services";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';
import { useTypes } from "../../../hooks/views";
import { useNavigate } from "react-router-dom";

export default function InstallationSystem() {
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true)

    }, []);
    const { typelist: types } = useTypes();
    const { loading, setLoading} = useLoading();
    const navigate = useNavigate()
    

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
                        <h1>INKA FIXING'S WIDE RANGE OF PRODUCTS, FOCUSED ON QUALITY AND EXCELLENCE, WITH YOU IN ALL ENGINEERING SOLUTIONS.</h1>
                        <div className="Buttons-1">
                            <button id="bbb" onClick={() => {navigate("/installation-system/products")}}>View Products</button>
                        </div>
                    </div>
                    <InstallationServices types={types}  />
                </div>
            )}
        </>
    );
}
