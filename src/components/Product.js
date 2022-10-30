import React from 'react';
import { Link } from 'react-router-dom';

//function
import { shorten } from '../helper/function';

const Product = ({itemData}) => {
    return (
        <div>
            <img src={itemData.image} alt="product" style={{width:"300px"}} />
            <h3>{shorten(itemData.title)}</h3>
            <p>{itemData.price}</p>
            <div>
                <Link to={`/products/${itemData.id}`}>Details</Link>
                <div>
                    <button>Add To Card</button>
                </div>
            </div>
        </div>
    );
}
 
export default Product;