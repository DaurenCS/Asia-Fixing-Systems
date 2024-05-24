import React from "react";
import './Technology.css'
import { useNavigate } from "react-router-dom";
export default function InstallationTechnology(){

    const navigate = useNavigate()
    return(
        <>
            <section className="installation-technology-elements">
                <div className="installation-technology">
                    <div className="installation-technology-description">
                        <h1>True Solutions for Installation Systems is INKA</h1> 
                        <button id="bbb" onClick={() => {navigate("/contacts")}}>Request more Information</button>
                    </div>
                </div>
                <div id="Description" className="descc">
                <h3><b>WHAT IS CSH TECHNOLOGY</b></h3>
                <p></p>
            </div>
            <div className="descc" id="uses-of-csh">
                <h3><b>USES OF CSH TECHNOLOGY BY KRYSTALINE</b></h3>
                <p>
                Waterproofing of new buildings: Admixtures for new structures
By using Krystaline as an admixture, a waterproofed concrete structure with crystalline technology is achieved natively. From the beginning of the concrete’s life, crystallization remains active in the structure.  This property remains latent for the entire life of the concrete. We could say that Krystaline admixtures ally with water, when it appears, to waterproof and protect the concrete.

Concrete repair solution: waterproofing mortars
They are used to protect or repair concrete constructions that are degraded or mainly subject to the presence of water.

Unlike other technologies, repair products (waterproofing mortars) do not only form a surface barrier. In the presence of water, Krystaline penetrates by adsorption and thanks to its catalytic nature, it penetrates further and further to waterproof the concrete throughout its thickness. In this way, we achieve the same benefits as our admixtures for existing structures.

With sufficient time, the surface application can even be removed, leaving the concrete substrate waterproofed.

In short, it is a latent technology that reacts to the presence of water throughout the life cycle of the concrete, achieving permanent results in its application.
                </p>
            </div>
                
                
            </section>
        </>
    )
}