import React, { useRef } from "react";
import './Services.css';
import { useNavigate, useParams } from "react-router-dom";
import { useTypes } from "../../../hooks/views";
import { useLoading } from "../../Loader/LoadingContext";
import Loader from '../../Loader/Loader';
import { useTranslation } from "react-i18next";

export default function InstallationServices({types}) {
    const navigate = useNavigate();
    const { loading } = useLoading();
    const {t} = useTranslation()
    const {local} = useParams()

    const scrollContainerRef = useRef(null);

    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (<>
                    
                <div className="installation-service-products-element">
                <div className="installation-products-name">
                         <h1>{t('isolation-products')}</h1>
                    </div> 
                    <div className="installation-service-products">
                        <div className="installation-products-l" ref={scrollContainerRef}>
                            {types.map((product) => (
                            <div
                                key={product.id}
                                className="Service-1"
                                onClick={() => {
                                navigate(`/${local}/installation-system/products/${product.id}`);
                                }}
                            >
                                <img src={product.description} alt="" />
                                <div className="descrr">
                                <h3><b>{product.name}</b></h3>
                                <div className="icon">
                                    <button className="button"><span>{t('see-products')}</span></button>
                                </div>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                        <div className="scroll-buttons">
                            <button onClick={() => scroll(-410)} className="scroll-button left">&lt;</button>
                            <button onClick={() => scroll(410)} className="scroll-button right">&gt;</button>
                        </div>
                       </div>
                </div>
                
                </>
                // <div className="Products">
                //     <div className="installation-products-name">
                //         <h1>PRODUCTS</h1>
                //     </div>
                //     <div className="Services-1">
                //         {types.map((product) => (
                //             <div
                //                 key={product.id}
                //                 className="Service-1"
                //                 onClick={() => {
                //                     navigate("/installation-system/products/" + product.id);
                //                 }}
                //             >
                //                 <img src={product.description} alt="" />
                //                 <div className="descrr">
                //                     <h3><b> {product.name}</b></h3>
                //                     <div className="icon">
                //                         <button className="button"><span>See the products </span></button>
                //                     </div>
                //                 </div>
                //             </div>
                //         ))}
                //     </div>
                // </div>
            )}
        </>
    );
}
