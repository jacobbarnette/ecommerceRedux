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
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
