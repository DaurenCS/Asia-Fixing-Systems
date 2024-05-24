import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import './MainPage.css';
import Services from "./Services/Services";
import Company from "./Company/Company";
import Contacts from "./Contacts/Contacts";

export default function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();

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
            <div id="main" className="Main">
                <div className="block-1">
                    <div className="descriptions-1">
                        <div className="Description">
                            <span className="color_11 wixui-rich-text__text">Innovative Solutions for Modern Construction</span> 
                        </div>
                        <p className="Description-1">A company engaged in the supply of advanced building materials and construction technologies</p>
                        <button id="bbb" onClick={() => { navigate("/contacts") }}>Contact us</button>
                    </div>
                    <div className="description-images">
                        <img src="" alt="" />
                    </div>
                </div>
                <Services />
                <Company />
                <Contacts />
            </div>
        </>
    );
}
