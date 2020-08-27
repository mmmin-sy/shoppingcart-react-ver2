import React from 'react';
import ProductList from './features/ProductList';
import ShoppingCart from './features/ShoppingCart';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProductList></ProductList>
      <ShoppingCart></ShoppingCart>
        
    </div>
  );
}

export default App;
