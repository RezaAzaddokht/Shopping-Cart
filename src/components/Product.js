import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../context/CardContextProvider';

//function
import { isInCart, quantityCount, shorten } from '../helper/function';

const Product = ({itemData}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
            <img src={itemData.image} alt="product" style={{width:"300px"}} />
            <h3>{shorten(itemData.title)}</h3>
            <p>{itemData.price}</p>
            <div>
                <Link to={`/products/${itemData.id}`}>Details</Link>
                <div>
                    {quantityCount(state,itemData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload:itemData})}>-</button>}
                    {quantityCount(state,itemData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload:itemData})}>Remove</button>}
                    {
                        isInCart(state,itemData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE", payload:itemData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload:itemData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Product;