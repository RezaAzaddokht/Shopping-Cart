import React from 'react';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Components
import Store from './components/Store';


function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
