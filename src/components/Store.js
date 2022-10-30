import React, { useContext } from 'react';

//Context
import { ProductsContext } from '../context/ProductsContextProvider';

//Components
import Product from './Product';

// Css
import styles from './Store.module.css'

const Store = () => {

    const product = useContext(ProductsContext)

    return (
        <div className={styles.Store}>
            {
                product.map( item => <Product key={item.id} itemData={item} />)
            }
        </div>
    );
}
 
export default Store;