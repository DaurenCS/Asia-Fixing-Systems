import { useState, useEffect } from "react";
import axios from "./axios";
import { useLoading } from "../components/Loader/LoadingContext";

const FOODLIST_URL = "/products";
const TYPELIST_URL = "/types-with-categories";
const CATEGORY_URL = "/categories/";

export const useProducts = () => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(FOODLIST_URL, {
                    headers: { "Content-Type": "application/json" }
                });
                setProductList(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [setLoading]);

    return { productList };
};

export const useTypes = () => {
    const { setLoading } = useLoading();
    const [typelist, setTypelist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(TYPELIST_URL, {
                    headers: { "Content-Type": "application/json" }
                });
                setTypelist(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [setLoading]);

    return { typelist };
};

export const useProductByCategory = (id) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                setLoading(true);
                try {
                    const { data } = await axios.get(`${FOODLIST_URL}/${id}/`, {
                        headers: { "Content-Type": "application/json" }
                    });
                    setProductList(data);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [id, setLoading]);

    return { productList };
};

export const useProductByType = (id) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                setLoading(true);
                try {
                    const { data } = await axios.get(`${FOODLIST_URL}/type/${id}`, {
                        headers: { "Content-Type": "application/json" }
                    });
                    setProductList(data);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [id, setLoading]);

    return { productList };
};

export const useProductsOrType = (id) => {
    const { productList: categoryProducts } = useProductByType(id);
    const { productList: allProducts } = useProducts();

    if (id) {
        return { productList: categoryProducts };
    } else {
        return { productList: allProducts };
    }
};
