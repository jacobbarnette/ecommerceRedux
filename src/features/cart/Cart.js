import React from "react";
import { useEffect } from "react";
import { selectAllCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
const Cart = () => {
  const cartItems = useSelector(selectAllCart);
  console.log(cartItems);
  return <div>
    <Header /> 
    cart
  </div>;
};

export default Cart;
