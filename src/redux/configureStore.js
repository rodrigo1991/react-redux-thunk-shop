import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import cartReducer from './ducks/cart';
import menuReducer from './ducks/menu';

const reducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer
});
const store = createStore(reducer, devToolsEnhancer());

export default store;
