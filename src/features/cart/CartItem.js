import React from "react";
import {
  decreaseQuanityOfItem,
  increaseQuanityOfItem,
  selectAllCart,
} from "./cartSlice";
import { Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  BsFileMinusFill,
  BsFilePlusFill,
  BsTrash2,
  BsPlus,
  BsDash,
} from "react-icons/bs";
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
          <td>$ {item.price}</td>
          <td>
            <Button
              variant="light"
              className="decreaseBtn cartBtn"
              onClick={() => {
                dispatch(decreaseQuanityOfItem(item));
              }}
            >
              {"           "}
              <BsDash />
            </Button>
            {item.quanity}
            <Button
              variant="light"
              className=" cartBtn increaseBtn"
              onClick={() => {
                dispatch(increaseQuanityOfItem(item));
              }}
            >
              {" "}
              <BsPlus />
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
