import React from 'react';

const Product = ({itemData}) => {
    return (
        <div>
            <img src={itemData.image} />
            <h3>{itemData.title}</h3>
            <p>{itemData.price}</p>
            <div>
                <a href='#'>Details</a>
                <div>
                    <button>Add To Card</button>
                </div>
            </div>
        </div>
    );
}
 
export default Product;