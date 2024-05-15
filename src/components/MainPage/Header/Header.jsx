import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box";
import './Header.css';
import logo from './logoo.png'
function Header() {
    
    const navigate = useNavigate();
    
    
    return(
        <StickyBox  offsetTop={0} offsetBottom={10}>
        <header className="header">
            <div className="logo">
                <Link to={"/"}>
                    <div className="logo-container">
                        <div className="logo-icon">
                            <img src={logo} alt="" />
                            {/* <img src="https://www.kfc.kz/admin/files/3190.svg" alt="" /> */}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="user-info">
                <a href="#main">Main</a>
                <a href="#services">Services</a>
                <a href="#company">About us</a>
                <div className='button-header'>
                    <a href="#contacts"><button id="bbb"> Contact us</button></a>
                </div>

                
            </div>
        </header>
    </StickyBox>
    )
}

export default Header