/* eslint-disable no-underscore-dangle */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './ducks/cart';
import menuReducer from './ducks/menu';
import userReducer from './ducks/user';

const reducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  user: userReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
