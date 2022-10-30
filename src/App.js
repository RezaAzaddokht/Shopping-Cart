import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Components
import Store from './components/Store';


function App() {
  return (
    <ProductsContextProvider>
      <Switch>
        <Route path='/product' component={Store} />
        <Redirect to='/product' />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
