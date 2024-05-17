import React from "react";
import { useNavigate } from "react-router-dom";
import './Services.css'

export default function InstallationServices(){
    const navigate = useNavigate()
    const products = [
        {
            id: "concrete-admixtures",
            name: "CONCRETE ADMIXTURES",
            url: "https://inkafixing.com/Uploads/images/ProductGroups/couplings.jpg",
            desc: "Internal waterproofing for the entire life of the concrete."

        },
        {
            id: "concrete-repair",  
            name: "CONCRETE REPAIR",
            url: "https://inkafixing.com/Uploads/images/ProductGroups/eta-du%CC%88beller-foto.jpg",
            desc: "Surface applied protection and repair for the life of the concrete."

        },
        {
            id: "concrete-repair",  
            name: "CONCRETE REPAIR",
            url: "https://inkafixing.com/Uploads/images/otomotiv.jpg",
            desc: "Surface applied protection and repair for the life of the concrete."

        },
        {
            id: "concrete-repair",  
            name: "CONCRETE REPAIR",
            url: "https://inkafixing.com/Uploads/images/customer%20(1).jpg",
            desc: "Surface applied protection and repair for the life of the concrete."

        },
        {
            id: "concrete-repair",  
            name: "CONCRETE REPAIR",
            url: "https://inkafixing.com/Uploads/images/ProductGroups/installation-systems.jpg",
            desc: "Surface applied protection and repair for the life of the concrete."

        },
        
    ]

    return(
        <div className="Products">
                        <div>
                            <h1>PRODUCTS</h1>
                        </div>
                            <div className="Services-1">
                                {products.map((product) => (
                                    <div className="Service-1" onClick={() => {
                                        navigate("/installation-systems/" + product.name);
                                    }} >
                                        <img src={product.url} alt="" />
                                        <div className="descrr">
                                            <h3><b> {product.name}</b></h3>
                                            <div className="icon">
                                            <button class="button"><span>See the products </span></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
    )
}