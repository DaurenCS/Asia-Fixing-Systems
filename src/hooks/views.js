
import { useState, useEffect, useCallback } from "react";
import axios from "./axios";


const FOODLIST_URL = "/products";


export const useProducts = () => {
    const [foodList, setProductList] = useState([])
    
    useEffect(() => {
        try {
            axios.get(
                FOODLIST_URL,
                {
                    headers: { "Content-Type": "application/json" }
                }
            ).then(({ data }) => {
                setProductList(data)
            }).catch(({ response }) => {
                console.log(response)
            });
        } catch (err) {
            console.log(err)
        }
    });
    return { foodList};
}
