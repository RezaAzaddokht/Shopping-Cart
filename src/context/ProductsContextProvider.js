import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const ProductsContextProvider = () => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    } , [])

    return (
        <>
        </>
    );
}
 
export default ProductsContextProvider;