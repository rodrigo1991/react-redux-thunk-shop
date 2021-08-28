// Actions
const SET_OPEN = 'e-commerce/menu/SET_OPEN';
const SET_MOBILE_OPEN = 'e-commerce/menu/SET_MOBILE_OPEN';

const initialState = {
  open: true,
  mobileOpen: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: action.payload
      };
    case SET_MOBILE_OPEN:
      return {
        ...state,
        mobileOpen: action.payload
      };
    default:
      return state;
  }
};
// Action Creators

/**
 * @param {Boolean} open
 * @returns
 */
export const setOpen = open => ({
  type: SET_OPEN,
  payload: open
});

/**
 * @param {Boolean} mobileOpen
 * @returns
 */
export const setMobileOpen = mobileOpen => ({
  type: SET_MOBILE_OPEN,
  payload: mobileOpen
});
// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
