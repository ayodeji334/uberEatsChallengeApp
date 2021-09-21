import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";

let reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    return store;
}