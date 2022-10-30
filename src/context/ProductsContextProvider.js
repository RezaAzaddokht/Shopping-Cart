import React, { createContext, useEffect, useState } from 'react';

//api
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts());
        }

        fetchApi();
    } , [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}
 
export default ProductsContextProvider;