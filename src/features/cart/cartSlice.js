import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      console.log(state.cart, action.payload.id);
      return state.cart.filter((item) => item.id !== id);
    },
  },
});

export const selectAllCart = (state) => state.cart.cart;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
