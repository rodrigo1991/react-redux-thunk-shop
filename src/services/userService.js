import axios from 'axios';

export const getUser = async id =>
  axios.get(`${process.env.REACT_APP_PRODUCT_API}/users/${id}`);

export const getUsers = async () =>
  axios.get(`${process.env.REACT_APP_PRODUCT_API}/users`);

export const getUserByUsernameAndPassword = async (username, pass) =>
  axios.get(
    `${process.env.REACT_APP_PRODUCT_API}/users?username=${username}&password=${pass}`
  );
