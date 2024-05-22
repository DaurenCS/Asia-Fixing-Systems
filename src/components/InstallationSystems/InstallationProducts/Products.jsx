import React from "react";
import './Products.css';
import { useNavigate, useParams } from "react-router-dom";
import { useProductsOrType, useTypes} from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from "../../Loader/Loader";

export default function InstallationProducts() {
    const { id } = useParams();
    const { typelist: types } = useTypes()
    const { productList } = useProductsOrType(id);
    const { loading } = useLoading();
    const navigate = useNavigate()
    return (
        <>
        {loading ? ( <Loader/> ):
        (<div className="installation-products-elements">
                    <div className="side-bar">
                    <h3>Categories</h3>
                        {types.map( type => (   
                            <div className="type">
                                <div className="type-name" onClick={() => {
                                    window.location.href = "/installation-system/products/" + type.id; }} >
                                    <h4> - {type.name}</h4>
                                </div>
                                <div className="categories">
                                    <WithCategories key={type.id} type={type.categories} />
                                </div>
                            </div>
                        )

                        )}
                    </div>                
                    <div className="installation-products">
                        <div className="installation-description">
                            <h1>Products {id}</h1>
                        </div>
                        <div className="installation-products-list">
                            {productList.length === 0 ? (
                                    <h1>NOT FOUND</h1>
                                ) : (
                                    productList.map(product => (
                                        <div key={product.id} className="installation-product">
                                            <div>
                                                <img src={product.images.name} alt={product.name} />
                                                {product.name}
                                            </div>
                                            <div className="icon">
                                                <button className="button" onClick={()=> (navigate('/installation-system/product/'+product.id))}><span>See the product </span></button>
                                            </div>
                                            
                                        </div>
                                        
                                    ))
                                )}
                        </div>
                    </div>
            </div>)
        }
        </>
        
    );
}


function WithCategories({ type }) {

    return (
            <div>
                {type.map(category => (
                    <div key={category.id} className="category">
                        {category.name}
                    </div>
                ))}
            </div>
    );
}