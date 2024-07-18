import React from "react";
import './MountingProducts.css' 
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProductByCategory } from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from "../../Loader/Loader";

export default function MountingProducts(){
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
        <div className="mounting-product-elements">
            <div className="product-name">
                <h1>{category.name}</h1>
            </div>
            <div className="foams-categories">
                {products.map((product) => (
                    <div className="foams-category" onClick={() => {
                        navigate(`/${local}/mounting-foams/products/${id}/${product.name}`, {state: product});
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