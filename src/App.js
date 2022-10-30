import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <ProductsContextProvider>
      <Switch>
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={Store} />
        <Redirect to='/products' />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
