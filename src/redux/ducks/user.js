import { getUserByUsernameAndPassword } from '../../services/userService';

// Actions
const FETCH_USERS = 'e-commerce/users/FETCH_USERS';
const FETCH_SUCCESS = 'e-commerce/carts/FETCH_SUCCESS';
const FETCH_FAILURE = 'e-commerce/carts/FETCH_FAILURE';
const REMOVE_USER = 'e-commerce/carts/REMOVE_USER';

const initialState = {
  userLoading: false,
  loggedUser: null,
  userError: null
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, userLoading: true, userError: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userError: false,
        loggedUser: action.payload
      };
    case FETCH_FAILURE:
      return { ...state, userLoading: false, userError: action.payload };
    case REMOVE_USER:
      return { ...state, loggedUser: null };
    default:
      return state;
  }
};
// Action Creators

const initFetch = () => ({
  type: FETCH_USERS
});

const fetchSuccess = users => ({
  type: FETCH_SUCCESS,
  payload: users
});

const fetchFailure = message => ({
  type: FETCH_FAILURE,
  payload: message
});

export const login = (user, history) => async dispatch => {
  dispatch(initFetch());
  try {
    const resp = await getUserByUsernameAndPassword(
      user.username,
      user.password
    );
    const logged = resp.data[0];
    if (logged) {
      dispatch(fetchSuccess(logged));
      history.push('/');
    } else dispatch(fetchFailure({ message: 'User and password incorrect' }));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const removeUser = () => ({ type: REMOVE_USER });
