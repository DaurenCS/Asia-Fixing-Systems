import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header/Header";
import './MainPage.css';
import Services from "./Services/Services";
import Company from "./Company/Company";
import Contacts from "./Contacts/Contacts";
import { useTranslation } from "react-i18next";
import { useLoading } from "../Loader/LoadingContext";
import Loader from "../Loader/Loader";
import { useTechnologies } from "../../hooks/views";
import { tech } from "../../products";

export default function MainPage() {
    const location = useLocation();
    const {local} = useParams()
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { loading, setLoading} = useLoading();
    const {productList: services} = useTechnologies(local)
    

    useEffect(() => {
        if (location.state && location.state.targetId) {
            const { targetId } = location.state;
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            navigate("/", { replace: true, state: {} });
        }
    }, [location, navigate]);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const headerHeight = document.querySelector('header').offsetHeight; 
                const targetId = this.getAttribute('href').substring(1); 
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);


    return (
        <>
            {loading ? (
                <Loader/>
            ):(
                <div id="main" className="Main">
                    <div className="block-1">
                        <div className="descriptions-1">
                            <div className="Description">
                                <span className="color_11 wixui-rich-text__text">{t('description')}</span> 
                            </div>
                            <p className="Description-1">{t('description_1')}</p>
                            <button id="bbb" onClick={() => { navigate(`/${local}/contacts`) }}>{t('button-contacts')}</button>
                        </div>
                        <div className="description-images">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <Services services={tech.filter(a => a.local == local)} />
                    <Company />
                    <Contacts />
                </div>
            )}
           
        </>
    );
}
