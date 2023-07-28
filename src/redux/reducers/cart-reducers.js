import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      let updatedCartItems = [];
      let itemExists = false;
      state.cartItems.forEach((item) => {
        if (item.id === action.payload.id) {
          itemExists = true;
          item.quantity++;
        }
        updatedCartItems.push(item);
      });

      if (!itemExists) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        updatedCartItems.push(newItem);
      }

      return {
        ...state,
        numberCart: state.numberCart + 1,
        cartItems: updatedCartItems,
      };

    case ActionTypes.REMOVE_FROM_CART:
        const removedItemId = action.payload;
      const removedItem = state.cartItems.find((item) => item.id === removedItemId);
      const updatedCartItemsRemove = state.cartItems.filter(
        (item) => item.id !== removedItemId
      );
      return {
        ...state,
        numberCart: state.numberCart - removedItem.quantity, // Decrement by item quantity
        cartItems: updatedCartItemsRemove,
      };

      case ActionTypes.INCREMENT_ITEM_QUANTITY:
      const incrementedItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        numberCart: state.numberCart + 1, // Increment the numberCart value
        cartItems: incrementedItems,
      };


      case ActionTypes.DECREMENT_ITEM_QUANTITY:
        const { itemId, quantity } = action.payload;
      const updatedCartItemsDecrement = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );

      // Filter out items with quantity greater than 0
      const updatedCartItemsFiltered = updatedCartItemsDecrement.filter((item) =>
        item.quantity > 0
      );

      // Find the item being decremented
      const decrementedItem = state.cartItems.find((item) => item.id === itemId);

      return {
        ...state,
        numberCart: state.numberCart - (decrementedItem ? 1 : 0), // Decrement the numberCart value by 1 if an item is decremented
        cartItems: updatedCartItemsFiltered,
      };


    default:
      return state;
  }
};


