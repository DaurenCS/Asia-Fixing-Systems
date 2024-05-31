import { useState, useEffect } from "react";
import axios from "./axios";
import { useLoading } from "../components/Loader/LoadingContext";

const FOODLIST_URL = "/products";
const TYPELIST_URL = "/types-with-categories";
const CATEGORY_URL = "/products/category/";
const PRODUCTDETAILS_URL = "/"
const TECHNOLOGIES_URL = "/technologies"
const HIDROCATEGORIES_URL = "/products/isolation/categories"
const CERTIFICATE_URL = "/certificates"

export const useProducts = (local) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`/installation${FOODLIST_URL}?local=${local}`, {
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

export const useTypes = (local) => {
    const { setLoading } = useLoading();
    const [typelist, setTypelist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${TYPELIST_URL}?local=${local}`, {
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
                    const { data } = await axios.get(`${CATEGORY_URL}${id}/`, {
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

export const useProductsOrType = (id, local) => {
    const { productList: categoryProducts } = useProductByType(id);
    const { productList: allProducts } = useProducts(local);

    if (id) {
        return { productList: categoryProducts };
    } else {
        return { productList: allProducts };
    }
};



export const useProductDetails = (id) => {
    const { setLoading } = useLoading();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                setLoading(true);
                try {
                    const { data } = await axios.get(`${FOODLIST_URL}/${id}`, {
                        headers: { "Content-Type": "application/json" }
                    });
                    setProductDetail(data);
                } catch (error) {
                    console.error("Error fetching product details:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [id, setLoading]);

    return { productDetail };
};

export const useTechnologies = (local) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${TECHNOLOGIES_URL}?local=${local}`, {
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

export const useHidroCategories = (local) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${HIDROCATEGORIES_URL}?local=${local}`, {
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

export const useProductsByCategory = ( id) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${CATEGORY_URL}/${id}`, {
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

}

export const useCertificate  = (description) => {
    const { setLoading } = useLoading();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`/${description}${CERTIFICATE_URL}`, {
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

}

// export const useCertifate = (description) => {
//     const { setLoading } = useLoading();
//     const [productList, setProductList] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const { data } = await axios.get(`/${description}${CERTIFICATE_URL}`, {
//                     headers: { "Content-Type": "application/json" }
//                 });
//                 setProductList(data);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         fetchData();
//     }, [setLoading]);
// }