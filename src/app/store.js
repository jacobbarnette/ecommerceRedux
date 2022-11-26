import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import itemsRedicer from "../features/items/itemsSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsRedicer,
  },
});
