import React, { createContext, useEffect, useState } from 'react';

//api
import { getProducts } from '../services/api';

const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    } , [])

    return (
        <ProductsContext value={products}>
            {children}
        </ProductsContext>
    );
}
 
export default ProductsContextProvider;