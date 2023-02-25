import React from "react";
import {
  decreaseQuanityOfItem,
  increaseQuanityOfItem,
  selectAllCart,
} from "./cartSlice";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash2, BsPlus, BsDash } from "react-icons/bs";
import { removeItemFromCart } from "./cartSlice";

const CartItem = () => {
  const cart = useSelector(selectAllCart);
  const dispatch = useDispatch();
  const cartItems = cart.map((item) => {
    return (
      <>
        <tr>
          <td>
            <img className="cartImg" src={item.image}></img>
          </td>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td>
            <Button
              variant=""
              className=" cartBtn increaseBtn"
              onClick={() => {
                dispatch(increaseQuanityOfItem(item));
              }}
            >
              {" "}
              <BsPlus />
            </Button>
            {item.quanity}
            <Button
              variant=""
              className=""
              onClick={() => {
                dispatch(decreaseQuanityOfItem(item));
              }}
            >
              <BsDash />
            </Button>
          </td>
          <td>{item.price * item.quanity}</td>
          <td>
            <Button
              variant="danger"
              onClick={() => dispatch(removeItemFromCart(item))}
            >
              <BsTrash2 />
            </Button>
          </td>
        </tr>
      </>
    );
  });
  return cartItems;
};

export default CartItem;
