import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Services.css'
import { useTranslation } from "react-i18next";
import Loader from "../../Loader/Loader";

export default function IsolationServices({ products: initialProducts }){
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { local } = useParams()
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if (!initialProducts) {
            async function fetchProducts() {
                setLoading(true);
                try {
                    const response = await fetch(`https://asiafix-pro.com/api/products/isolation/categories?local=${local}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setProducts(data);
                } catch (error) {
                    console.error("Error fetching products:", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchProducts();
        }
    }, [initialProducts, local]);
    
    return(
        <>
        {loading ? 
        (<Loader/>):
        (
            <div className="Products">
                        <div className="descripion-benefits">
                            <h1>{t('isolation-products')}</h1>
                        </div>
                           <div className="hidro-products-detail">
                                {products.map((product) => (
                                    <div
                                        className="hidro-product"
                                        onClick={() => {
                                            navigate(`/${local}/isolation-system/products/${product.id}`, {state: product } );
                                        }}
                                        style={{ backgroundImage: `url(${product.image} )` }}
                                    >
                                        <div className="hidro-product-text">
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <button id="bbb">{t('view-products')}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
        )
        }
        </>
        
    )
}