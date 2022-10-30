import React, { useContext } from 'react';

//Context
import { ProductsContext } from '../context/ProductsContextProvider';

//Components
import Product from './Product';

const Store = () => {

    const product = useContext(ProductsContext)

    return (
        <div style={{display:"flex" , justifyContent:"space-between" , flexWrap:"wrap"}}>
            {
                product.map( item => <Product key={item.id} itemData={item} />)
            }
        </div>
    );
}
 
export default Store;