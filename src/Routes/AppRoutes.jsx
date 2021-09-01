import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../pages/Products/Products.jsx';
import Cart from '../pages/Cart/Cart.jsx';

const AppRoutes = () => {
  return (
    <>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/:category">
        <Products />
      </Route>
      <Route exact path="/">
        <Products />
      </Route>
    </>
  );
};

export default AppRoutes;
