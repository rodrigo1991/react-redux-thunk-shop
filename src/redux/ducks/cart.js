// Actions
const ADD = 'e-commerce/carts/ADD';
const REMOVE = 'e-commerce/carts/REMOVE';
const REMOVE_LAST = 'e-commerce/carts/REMOVE_LAST';

const initialState = {
  products: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE:
      return {
        ...state,
        products: [
          ...state.products.filter(
            product => product.cartId !== action.payload.cartId
          )
        ]
      };
    case REMOVE_LAST:
      return {
        ...state,
        products: [
          ...state.products.filter((_, i) => i !== state.products.length - 1)
        ]
      };
    default:
      return state;
  }
};
// Action Creators

export const add = cart => ({
  type: ADD,
  payload: cart
});

export const remove = product => ({ type: REMOVE, payload: product });

export const removeLast = () => ({ type: REMOVE_LAST });
