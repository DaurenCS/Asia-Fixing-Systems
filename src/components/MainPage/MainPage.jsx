import React, { useEffect } from "react";
import Header from "./Header/Header";
import './MainPage.css';
import Services from "./Services/Services";
import Company from "./Company/Company";
import Contacts from "./Contacts/Contacts";
export default function MainPage(){
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
    return(
        <>
        {/* <Header/> */}
        <div id="main" className="Main">
            <div className="block-1">
                <div className="descriptions-1">
                    <div className="Description">
                        <span class="color_11 wixui-rich-text__text">Innovative Solutions for Modern Construction</span> 
                    </div>
                    <p className="Description-1">A company engaged in the supply of advanced building materials and construction technologies</p>
                    <button id="bbb"> Contact us</button>
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
    )
}