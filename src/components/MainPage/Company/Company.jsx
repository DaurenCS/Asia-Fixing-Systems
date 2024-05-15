import React from "react";
import './Company.css'
import image from './logo.jpg'

export const text = "Our vision at Asia Fixing System is to revolutionize the construction industry with advanced building materials and cutting-edge technologies. We strive to be the leading supplier of innovative products and services that enable our clients to complete their projects with greater efficiency, sustainability, and cost-effectiveness. Through our commitment to quality, customization, and customer satisfaction, we aim to be the partner of choice for all construction-related needs."

export default function Company(){
    return(
        <div id="company" className="Company">
            <div className="descriptions-company">
                <div className="block-3">
                    <h2 className="about-us">About Us</h2>
                    <div className="vision">
                        <h2>Our Vision</h2>
                    </div>
                    <div className="text-decs">
                        <span className="text">{text}</span>
                        <h3>aaa@gmail.com</h3>
                    </div>
                    <div className="contacts-icons">
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png" alt="" />
                        </a>
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="" />
                        </a>
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536479.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="team-story">
                <img src={image} alt="" className="company-image" />
                <div className="team-story-text">
                    <div className="vision">
                        <h2>Team Story</h2>
                    </div>
                    <div className="text-1">
                        At Asia Fixing System, we are committed to delivering advanced building materials and construction technologies to our clients. Our team of experts is passionate about creating customized solutions that meet our clients’ specific needs. We strive for excellence in everything we do, from quality assurance to efficient supply chain management. With our focus on innovation and a customer-centric approach, we are dedicated to ensuring the success of your projects.
                    </div>
                </div>
            </div>  

            <div className="members">
                
            </div>
        </div>
    )
}