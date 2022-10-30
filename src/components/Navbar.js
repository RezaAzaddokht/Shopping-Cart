import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../context/CardContextProvider';

// Css
import styles from './Navbar.module.css'


const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.navbar}>
            <Link to="/products">Products</Link>
            <div>
                <Link to="/Cart"><span>{state.itemsCounter}</span></Link>   
            </div>
        </div>
    );
};

export default Navbar;