import React from "react";
import './Services.css';
import { useNavigate } from "react-router-dom";
import { useTypes } from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';

export default function InstallationServices({products}) {
    const navigate = useNavigate();
    const { loading } = useLoading();

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="Products">
                    <div className="installation-products-name">
                        <h1>PRODUCTS</h1>
                    </div>
                    <div className="Services-1">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="Service-1"
                                onClick={() => {
                                    navigate("/installation-system/products/" + product.id);
                                }}
                            >
                                <img src={product.description} alt="" />
                                <div className="descrr">
                                    <h3><b> {product.name}</b></h3>
                                    <div className="icon">
                                        <button className="button"><span>See the products </span></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
