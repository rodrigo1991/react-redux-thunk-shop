import axios from 'axios';

export const getProduct = async id =>
  axios.get(`${process.env.REACT_APP_PRODUCT_API}/products/${id}`);

export const getProducts = async () =>
  axios.get(`${process.env.REACT_APP_PRODUCT_API}/products`);

export const getProductsByCategory = async category =>
  axios.get(
    `${process.env.REACT_APP_PRODUCT_API}/products?categories=${category}`
  );
