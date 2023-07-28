import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers/cart-reducers';
import favoriteReducer from './reducers/favourite-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
});

const store = createStore(rootReducer);

export default store;
