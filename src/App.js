import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import CardContextProvider from './context/CardContextProvider';


function App() {
  return (
    <ProductsContextProvider>
      <CardContextProvider>
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route path='/products' component={Store} />
          <Redirect to='/products' />
        </Switch>
      </CardContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
