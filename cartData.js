export let cart = [];

export const addToCart = (item) => {
  cart.push(item);
};

export const getCart = () => cart;

export const clearCart = () => {
  cart = [];
};