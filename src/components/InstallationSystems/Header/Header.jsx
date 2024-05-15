import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
import logo_1 from './logo.png'

export default function InstallationHeader() {
    
    const navigate = useNavigate()

    return(
        <>  
            <header className='Header'>
                <div className='logo'>

                    <img onClick={() => {navigate("/")}} id= 'logo-1' src={logo} alt="" />
                    <img onClick={() => {navigate("/installation-system")}} id='logo_2' src={logo_1} alt="" />
                </div>
                <div className='info'>
                    <div className='products' onClick={() => {navigate("/installation-system/products")}}>
                        <p><b>Products</b></p>
                    </div>
                    <div className='Technology' onClick={() => {navigate("/installation-system/technology")}}>
                        <p><b>Technology</b></p>
                    </div>
                    <div className='certificats' onClick={() => {navigate("/installation-system/certificates")}}>
                        <p><b>Certificates and Tests</b></p>
                    </div>
                    <div className='contacts-installation' onClick={() => {navigate("/contacts")}}>
                        <button>Contact Us</button>
                    </div>
                    
                        
                        
                        

                </div>
            </header>
        </>
    )

}