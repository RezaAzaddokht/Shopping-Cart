import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

//Context
import { ProductsContext } from '../context/ProductsContextProvider';

// Css
import styles from './Details.module.css'

const ProductDetails = () => {

    const params = useParams()
    const id = params.id
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image , category , title , description , price} = product;

    return (
        <div className={styles.Details}>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category : </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to='/products'>back to store</Link>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetails;