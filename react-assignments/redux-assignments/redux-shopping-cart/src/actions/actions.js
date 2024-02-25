
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from './actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { itemId, quantity },
});
