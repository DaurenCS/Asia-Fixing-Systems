import { useProducts } from "../../hooks/views";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
    
    const { foodList: foodData} = useProducts();
    const navigate = useNavigate()

    return(
        <div>
            {foodData.map((product)=> (
                <div>
                    {product.name}
                </div>
            ))}
        </div>
    )
}