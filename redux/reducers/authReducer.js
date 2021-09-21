import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actionsType";

  
const initialState = {
  isAuthenticated: false,
  currentUser: {},
  isLoadingAuthStatus: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: 
      return {
          ...state,
          isAuthenticated: true,
          isLoadingAuthStatus: false,
          currentUser: action.payload
      }
    case LOGIN_ERROR: 
      return {
          ...state,
          isAuthenticated: false,
          isLoadingAuthStatus: false
        }
    case LOGOUT_SUCCESS:
      return {
          ...state,
          isAuthenticated: false,
          currentUser: {}
        }
    case LOGOUT_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {}
      }
    default:
      return state;
  }
};
  
export default authReducer;