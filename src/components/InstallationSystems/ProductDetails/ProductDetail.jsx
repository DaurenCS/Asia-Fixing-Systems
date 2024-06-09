import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useProductDetails } from "../../../hooks/views";
import Loader from "../../Loader/Loader";
import { useLoading } from "../../Loader/LoadingContext";
import { useTranslation } from "react-i18next";

export default function InstallationProductDetails() {
    const { product_id } = useParams();
    const navigate = useNavigate();
    const locate = useLocation()
    const product = locate.state
    const { loading } = useLoading();
    const { local } = useParams()

    const { t } = useTranslation()

    if (loading) {
        return <Loader />;
    }

    if (!product.description) {
        return null; // Return null or handle the case where description is undefined
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
                <button id="bbb" onClick={() => navigate(`/${local}/contacts`)}>
                    {t('request')}
                </button>
            </div>
            <div className="image">
                <img src={product.vendor_code} alt={product.name} />
            </div>
        </div>
    );
}
