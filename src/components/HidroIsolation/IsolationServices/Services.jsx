import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Services.css'
import { useTranslation } from "react-i18next";
export default function IsolationServices(){
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { local } = useParams()
    const products = [
        {
            id: "concrete-admixtures",
            name: "CONCRETE ADMIXTURES",
            url: "https://krystaline.es/wp-content/uploads/2023/11/krystaline-aditivosparahormigon-700x700-1.jpg",
            desc: "Internal waterproofing for the entire life of the concrete."

        },
        {
            id: "concrete-repair",  
            name: "CONCRETE REPAIR",
            url: "https://krystaline.es/wp-content/uploads/2023/11/krystaline-morterosparahormigon-700x700-1.jpg",
            desc: "Surface applied protection and repair for the life of the concrete."

        }
    ]

    return(
        <div className="Products">
                        <div className="descripion-benefits">
                            <h1>{t('isolation-products')}</h1>
                        </div>
                           <div className="hidro-products-detail">
                                {products.map((product) => (
                                    <div
                                        className="hidro-product"
                                        onClick={() => {
                                            navigate(`/${local}/isolation-system/products/${product.id}` );
                                        }}
                                        style={{ backgroundImage: `url(${product.url})` }}
                                    >
                                        <div className="hidro-product-text">
                                            <h3>{product.name}</h3>
                                            <p>{product.desc}</p>
                                            <button id="bbb">{t('view-products')}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
    )
}