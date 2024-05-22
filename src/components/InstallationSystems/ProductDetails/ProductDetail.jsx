import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetails } from "../../../hooks/views";
import Loader from "../../Loader/Loader";
import { useLoading } from "../../Loader/LoadingContext";

export default function InstallationProductDetails() {
    const { product_id } = useParams();
    const navigate = useNavigate();
    const { productDetail: product } = useProductDetails(product_id);
    const { loading } = useLoading();

    if (loading) {
        return <Loader />;
    }

    if (!product || !product.description) {
        return <p>No product details found.</p>; // Handle case where product or description is undefined
    }

    const sentences = product.description.split(/\.\s+/);

    return (
        <div className="product-details">
            <div className="descriptions">
                <h1 className="name">{product.name}</h1>
                {sentences.map((sentence, index) => (
                    <p key={index}>
                        <span style={{ marginRight: '0.5rem' }}>&bull;</span>
                        {sentence}
                    </p>
                ))}
                <button id="bbb" onClick={() => navigate("/contacts")}>
                    Request More Information
                </button>
            </div>
            <div className="image">
                <img src={product.images.name} alt={product.name} />
            </div>
        </div>
    );
}
