
import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My E-Commerce App</h1>
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
