/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import Product from '../../components/Product/Product.jsx';
import {
  getProducts,
  getProductsByCategory
} from '../../services/productService';
import CenterSpinner from '../../commons/CenterSpinner.jsx';

const Products = () => {
  const match = useRouteMatch();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const fetch = async category => {
    setCargando(true);
    const response = category
      ? await getProductsByCategory(category)
      : await getProducts();
    setProductos(response.data);
    setCargando(false);
  };

  useEffect(() => {
    if (match.url === '/') fetch();
    else fetch(match.params.category);
  }, [match]);

  const makeCard = prod => {
    return (
      <Grid item xs={12} sm={3} key={prod.id}>
        <Product {...prod} />
      </Grid>
    );
  };

  if (cargando) return <CenterSpinner />;

  return (
    <Grid container spacing={2}>
      {productos.map(prod => makeCard(prod))}
    </Grid>
  );
};

export default Products;
