import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id } = action.payload;

      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.quanity++;
      } else {
        state.cart.push({ ...action.payload, quanity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);
    },
    increaseQuanityOfItem: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.cart.find((item) => item.id === id);
      selectedItem.quanity++;
    },
    decreaseQuanityOfItem: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.cart.find((item) => item.id === id);
      selectedItem.quanity--;
    },
  },
});

export const selectAllCart = (state) => state.cart.cart;

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuanityOfItem,
  decreaseQuanityOfItem,
} = cartSlice.actions;

export default cartSlice.reducer;
