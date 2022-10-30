import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../context/CardContextProvider';


const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/Cart"><span>{state.itemsCounter}</span></Link>   
                </div>
            </div>
        </div>
    );
};

export default Navbar;