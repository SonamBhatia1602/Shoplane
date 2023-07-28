import { ActionTypes } from "../constants/action-types";


const initialState = {
    favorites: [],
  };
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case ActionTypes.REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };

  export default favoriteReducer;