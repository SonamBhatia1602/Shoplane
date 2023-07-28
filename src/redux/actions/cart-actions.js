import { ActionTypes } from "../constants/action-types";

export const addToCart = (item) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: itemId,
  };
};


export const incrementItemQuantity = (itemId) => {
    return {
      type: ActionTypes.INCREMENT_ITEM_QUANTITY,
      payload: itemId,
    };
  };


export const decrementItemQuantity = (itemId,quantity) => {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: { itemId, quantity },
  };
};