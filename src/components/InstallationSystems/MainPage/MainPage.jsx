import React ,{useEffect } from "react";

import './MainPage.css'

export default function InstallationSystem(){
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return(
        <>
            <div className="main-page-installation-system">
                <div className="description">
                    <h1>INKA FIXING'S WIDE RANGE OF PRODUCTS, FOCUSED ON QUALITY AND EXCELLENCE, WITH YOU IN ALL ENGINEERING SOLUTIONS.</h1>
                    <div className="Buttons">
                            <button id="Contact-1">Contact Us</button>
                    
                    </div>
                </div>
                <div className="Products">
                    <h1>PRODUCTS</h1>
                    
                </div>
            </div>
        
        </>
    )
}