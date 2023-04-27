import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
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
        toast.success("Item added to cart");
        state.cart.push({ ...action.payload, quanity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);
      toast.error("Item removed from cart");
    },
    emptyAllItemsFromCart: (state, action) => {},
    increaseQuanityOfItem: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.cart.find((item) => item.id === id);
      toast.success("Item added to cart");
      selectedItem.quanity++;
    },
    decreaseQuanityOfItem: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.cart.find((item) => item.id === id);
      if (selectedItem.quanity <= 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else if (selectedItem.quanity > 1) {
        selectedItem.quanity--;
      }
      toast.error("Item removed from cart");
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
