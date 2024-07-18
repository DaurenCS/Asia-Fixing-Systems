import React, {useEffect} from "react";
import './ProductDetails.css'
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function IsolationProductDetails(){
    const navigate = useNavigate()
    const locate = useLocation()
    const { t } = useTranslation()
    const {local} = useParams()
    const product = locate.state 
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    // const product = 
    //     {
    //         url : "https://krystaline.es/wp-content/uploads/2023/11/krystaline-add1-bote-700x700-1.jpg",
    //         name : "Krystaline Add 1",
    //         description: "It is a hydrophilic C-S-H technology admixture that has proven to be very highly effective and compatible in a wide range of concrete mix designs. It has been designed to waterproof and increase the durability of concrete. It is certified as a waterproofing admixture and also as a water reducer/plasticizer and setting retarder. It is proven that Krystaline Add 1 provides excellent waterproofing performance,  increased resistances, protection of reinforcing steel against corrosion and ease of use. Dosed at 1 kg/m³ of concrete."
    //     }
        if (!product.description) {
            return null; // Return null or handle the case where description is undefined
        }
        

        const sentences = product.description.split(/\.\s+/);
    
    return(
        <>
        <div className="product-details">
            <div className="descriptions">
                <h1 className="name">{product.name}</h1>
                <div className="desccc">
                <div>
                {sentences.map((sentence, index) => (
                    <p key={index}>
                     <span style={{ marginRight: '0.5rem' }}>&bull;</span>
                        
                        {sentence}</p>
                ))}
                <button id="bbb" onClick={() => {navigate(`/${local}/contacts`)}}>{t('request')}</button>
                </div>
                <div className="image">
                    <img src={product.vendor_code} alt="" />
                </div>
                
                
                </div>    
            </div>
            
            
            <div>

            </div>
        </div>
        </>
    )
}