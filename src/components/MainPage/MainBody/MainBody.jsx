import React from "react";
import Header from "../Header/Header";
import "./MainBody.css"
import { Outlet } from "react-router-dom";

export default function MainBody(){
    return(
        <>
            <div className="body">
                <Header />
               
                <Outlet className="outlet" />
                        <div className="ending">
                        <div className="logo-icon">
                                <div>TOO "Asia Fixing Systems"</div>
                            </div>
                            
                        <div className="contacts-icons">
                            
                            <a href="https://www.linkedin.com/company/asia-fixing-systems/">
                                <img src="https://asiafix-pro.com/media/uploads/in.png" alt="" />
                            </a>
                            <a href="https://wa.me/77059604407">
                                <img src="https://asiafix-pro.com/media/uploads/whatsapp.png" alt="" />
                            </a>
                        </div>
                    </div>
            </div>
                
        </>
        
    )
}