import React from "react";
import {
  decreaseQuanityOfItem,
  increaseQuanityOfItem,
  selectAllCart,
} from "./cartSlice";
import { Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BsFileMinusFill, BsFilePlusFill, BsTrash2 } from "react-icons/bs";
import { removeItemFromCart } from "./cartSlice";

const CartItem = () => {
  const cart = useSelector(selectAllCart);
  const dispatch = useDispatch();
  const cartItems = cart.map((item) => {
    return (
      <>
        <tr>
          <td>
            <img src={item.image}></img>
          </td>
          <td>{item.title}</td>
          <td>$ {item.price}</td>
          <td>{item.quanity}</td>
          <td>
            <Button
              onClick={() => {
                dispatch(decreaseQuanityOfItem(item));
              }}
            >
              {" "}
              <BsFileMinusFill />
            </Button>

            {item.price * item.quanity}
            <Button
              onClick={() => {
                dispatch(increaseQuanityOfItem(item));
              }}
            >
              {" "}
              <BsFilePlusFill />
            </Button>
          </td>
          <td>
            <Button onClick={() => dispatch(removeItemFromCart(item))}>
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
