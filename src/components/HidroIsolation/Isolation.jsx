import React ,{useEffect } from "react";
import './Isolation.css'
import Header from "../MainPage/Header/Header";
import IsolationServices from "./IsolationServices/Services";
import { useNavigate} from "react-router-dom";

export default function Isolation(){
    const benefits = [
                {
                    description: "Waterproofing the concrete without need for membranes."
                },
                {
                    description: "Protecting reinforcing steel from corrosion."
                },
                {
                    description: "Self-healing the concrete."
                },
                {
                    description: "Increasing compressive, tensile and flexural strength."
                },
                {
                    description: "Safe for potable water."
                },
                {
                    description: "Increasing the durability and sustainability of the structure."
                },
            ]
        
            const main_benegfits = [
                {
                    name: "Total Waterproofing",
                    url: "https://krystaline.es/wp-content/uploads/2023/10/impermeabilizacion-total_1.png",
                    desc: "Krystaline is hydrophilic and uses water to enhance the hydration until the concrete is waterproof."
        
                },
                {
                    name: "Catalytic Performance",
                    url: "https://krystaline.es/wp-content/uploads/2023/10/catalizador_1.png",
                    desc: "Krystaline is always present to continue the enhanced hydration whenever water is present."
        
                }
            ]
            
            const navigate = useNavigate()
            useEffect(() => {
                window.scrollTo(0, 0); 
            }, []);

            return(
                <>
                <div>
                <div className="Container-1">
                    <div className="video">
                        <video autoPlay loop muted id="video">
                            <source src="https://krystaline.es/wp-content/uploads/2023/10/krystaline_aditivoshormigon_impermeabilizacion.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="description-1">
                        <h1>ADMIXTURES FOR WATERPROOFING CONCRETE WITH C-S-H TECHNOLOGY</h1>
                        <div className="Buttons">
                            <button id="bbb" onClick={() => {navigate("/contacts")}}>Contact Us</button>
                    
                            <button id="bbb" onClick={() => {navigate("/isolation-system/technology")}}>About Technology</button>
                        </div>
                    </div>  
                </div>
                <div className="Container-2">
                    <div className="benefits-main">
                        <div className="descripion-benefits">
                            <h1>BENEFITS</h1>
                            <h3>Krystaline admixtures:</h3>
                        </div>
                        <div className="benefits">
                            {benefits.map((benefit) => (
                            <div className="benefit">
                                <p><b>{benefit.description}</b></p>
                            </div>
                            ))}
                        </div>
                        <video autoPlay loop muted id="videodesc" controls>
                            <source src="https://krystaline.es/wp-content/uploads/2024/01/krystaline-krystalineadd1-en.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="benefits">
                        {main_benegfits.map((benefit) => (
                            <div className="benefit-with-image">
                                <img src={benefit.url} alt="" />
                                <h4>{benefit.name}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Container-3">
                        <IsolationServices></IsolationServices>
                </div> 
                <div className="Container-4">
                    {/* <h1>WHY CHOOSE US</h1> */}

                </div> 

                </div>
                
                </>
            )
}
