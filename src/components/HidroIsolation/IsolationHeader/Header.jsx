import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from "../../MainPage/Header/logoo.png";
export default function IsolationHeader() {
    
    const navigate = useNavigate()

    return(
        <>  
            <header className='Header'>
                <div className='logo'>

                    <img onClick={() => {navigate("/")}} id= 'logo-1' src={logo} alt="" />
                    <img onClick={() => {navigate("/isolation-system")}} id='logo-2' src="https://krystaline.es/wp-content/uploads/2023/10/logo-negro-krystaline-172x32px.png" alt="" />
                </div>
                <div className='info'>
                    <div className='products' onClick={() => {navigate("/isolation-system/products")}}>
                        <p><b>Products</b></p>
                    </div>
                    <div className='Technology' onClick={() => {navigate("/isolation-system/technology")}}>
                        <p><b>Technology</b></p>
                    </div>
                    <div className='certificats' onClick={() => {navigate("/isolation-system/certificates")}}>
                        <p><b>Certificates and Tests</b></p>
                    </div>
                    <div className='contacts' id='contacts-3' onClick={() => {navigate("/contacts")}}>
                        <button>Contact Us</button>
                    </div>
                    
                        
                        
                        

                </div>
            </header>
        </>
    )

}