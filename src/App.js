import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CardContextProvider from './context/CardContextProvider';

//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';


function App() {
  return (
    <ProductsContextProvider>
      <CardContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CardContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
