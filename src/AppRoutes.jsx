import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products/Products.jsx';
import Cart from './pages/Cart/Cart.jsx';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/:category" component={Products} />
      <Route exact path="/" component={Products} />
    </Switch>
  );
};

export default AppRoutes;
