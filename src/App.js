import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route path='/products' component={Store} />
          <Route path='/cart' component={ShopCart} />
          <Redirect to='/products' />
        </Switch>
      </CardContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
