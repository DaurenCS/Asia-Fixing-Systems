import React from "react";
import './IsolationProducts.css' 
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProductByCategory } from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from "../../Loader/Loader";

export default function IsolationProducts(){
    const navigate = useNavigate()
    const {id} = useParams();
    const { local } = useParams()
    const {productList: products} = useProductByCategory(id)
    const location = useLocation()
    const category = location.state 
    const { loading } = useLoading();

    return(
        <>
        {loading ? (<Loader/>):
        (
        <div className="hidroisolation-product-elements">
            <div className="product-name">
                <h1>{category.name}</h1>
            </div>
            <div className="Services">
                {products.map((product) => (
                    <div className="Service" onClick={() => {
                        navigate(`/${local}/isolation-system/products/${id}/${product.name}`, {state: product});
                    }} >
                        <img src={product.vendor_code} alt="" />
                        <h2><b> {product.name}</b></h2>
                    </div>
                ))}
            </div>
            
        </div>
        )
        
        }
            
            
        </>
    )
}