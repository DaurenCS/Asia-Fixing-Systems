import React from "react";
import "./Contacts.css"
export default function Contacts(){

    return(
        <div id="contacts" className="Contacts">
            
            <div className="contact-description">
                <h1 >
                    <span>Our Contacts</span>
                </h1>
                <p>Thank you for your interest in Asia Fixing System. We are a trading company that specializes in providing advanced building materials and construction technologies. Whether you have questions about our products or services, or would like to discuss a specific project, we are here to help. Please feel free to contact us by phone, email, or by filling out our contact form below. We will get back to you as soon as possible.</p>
                
                <div className="contact-details">

                <div className="phone">
                    <h3>+7(747)675-64-77</h3>
                </div>
                <div className="email">
                    <h3>d_kozhakhmetov@kbtu.kz</h3>
                </div>
                <h3>
                    <address>
                        Almaty, Kazakhstan
                    </address>
                </h3>
                 </div>
            </div>
            <div className="contact-image">
                <img src="https://media-public.canva.com/eWcvE/MAEmn_eWcvE/1/s2.jpg" alt="" />
            </div>
            
            
            

        </div>
    )
}