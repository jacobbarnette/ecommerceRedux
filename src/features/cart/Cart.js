import React from "react";
import { useEffect } from "react";
import { selectAllCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { removeItemFromCart } from "./cartSlice";
import Header from "../../components/Header";

const Cart = () => {
  const cart = useSelector(selectAllCart);
  console.log(cart);
  const dispatch = useDispatch();
  if (cart === undefined) {
    return (
      <div>
        <Header />
        <div>
          <h1 className="shoppingHeader">My Shopping Cart</h1>
          <h3 className="shoppingHeader">You have no items in your cart</h3>
        </div>
      </div>
    );
  } else {
    const cartItems = cart.map((item) => {
      return (
        <div>
          <h4>{item.title}</h4>
          <button onClick={() => dispatch(removeItemFromCart(item))}></button>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div>
          <h4 className="shoppingHeader">{cartItems}</h4>
        </div>
      </div>
    );
  }
};

export default Cart;
