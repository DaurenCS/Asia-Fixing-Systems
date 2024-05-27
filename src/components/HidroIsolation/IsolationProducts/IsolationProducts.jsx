import React from "react";
import './IsolationProducts.css' 
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function IsolationProducts(){

    const products = [
        {
            url : "https://krystaline.es/wp-content/uploads/2023/11/krystaline-add1-bote-700x700-1.jpg",
            name : "Krystaline Add 1"
        },
        {
            url : "https://krystaline.es/wp-content/uploads/2023/11/krystaline-addplus2_5-fondoblanco-700x700-1.jpg",
            name : "Krystaline Add Plus"
        },
        {
            url : "https://krystaline.es/wp-content/uploads/2023/11/krystaline-ultra-fondoblanco-700x700-1.jpg",
            name : "Krystaline Add 1 CW"
        },
        {
            url : "https://krystaline.es/wp-content/uploads/2023/11/krystaline-ultra-fondoblanco-700x700-1.jpg",
            name : "Krystaline Add 1 CW"
        },

    ]

    const navigate = useNavigate()
    const {id} = useParams();
    const { local } = useParams()

    const url = id


    return(
        <>
            <div className="hidroisolation-product-elements">
                <div className="product-name">
                    <h1>{id}</h1>
                </div>
                <div className="Services">
                    {products.map((product) => (
                        <div className="Service" onClick={() => {
                            navigate(`/${local}/isolation-system/products/${url}/${product.name}`);
                        }} >
                            <img src={product.url} alt="" />
                            <h2><b> {product.name}</b></h2>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </>
    )
}