import { ActionTypes } from "../constants/action-types";

export const addToFavorites = (product) => {
    return {
      type: ActionTypes.ADD_TO_FAVORITES,
      payload: product,
    };
  };

  export const removeFromFavorites = (product) => {
    return {
      type: ActionTypes.REMOVE_FROM_FAVORITES,
      payload: product.id,
    };
  };
