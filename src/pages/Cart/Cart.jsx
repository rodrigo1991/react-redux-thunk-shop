import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product.jsx';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const makeCard = producto => (
    <Grid item xs={12} sm={3}>
      <Product {...producto} />
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {products.map(producto => {
        const carro = { ...producto, isCart: true };
        return makeCard(carro);
      })}
    </Grid>
  );
};

export default Cart;
