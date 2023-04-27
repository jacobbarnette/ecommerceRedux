import React from "react";
import { Modal, Button, Col, Row, Table } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuanityOfItem,
  increaseQuanityOfItem,
  selectAllCart,
} from "../features/cart/cartSlice";

import { BsPlus, BsDash } from "react-icons/bs";

const CartModal = ({ showModal, handleModal }) => {
  const cart = useSelector(selectAllCart);
  const dispatch = useDispatch();
  const cartTotal = () => {
    let price = 0;

    cart.map((item) => {
      if (item.quanity > 1) {
        price += item.quanity * item.price;
      }
      price += item.price;
      return price;
    });
    return price.toFixed(2);
  };

  const cartItems = cart.map((item) => {
    const itemTotal = item.price.toFixed(2) * item.quanity.toFixed(2);

    return (
      <div className="individualCartItem">
        <Row>
          <img className="cartImg" alt="clothing item" src={item.image}></img>
        </Row>
        <Col>
          <h5 className="itemTitle mx-2 text-center">
            {item.title.substring(0, 21)}...
          </h5>
          <p className="text-center">{itemTotal.toFixed(2)}</p>
          <div className="itemBtn text-center mx-auto">
            <Button
              variant=""
              className="cartBtn"
              onClick={() => {
                dispatch(decreaseQuanityOfItem(item));
              }}
            >
              <BsDash />
            </Button>
            {item.quanity}

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
          </div>
        </Col>
      </div>
    );
  });
  return (
    <Modal
      top
      className="cartModal"
      show={showModal}
      onHide={handleModal}
      dialogClassName="dialogClass"
      backdropClassName="backdropClass"
    >
      <Modal.Body>
        <h2 className="cartHeader  py-3 m- text-center">Your Shopping Cart</h2>
        <div className="cartItems">{cartItems}</div>
        <div className="total text-center">
          <p className=" total my-5">Total: {cartTotal()} </p>
        </div>

        <Col>
          <Row className="p-5 mx-auto cartRow">
            <Button className="cartBtn itemBtn addBtn" onClick={handleModal}>
              Checkout
            </Button>
            <Button className="cartBtn itemBtn closeBtn" onClick={handleModal}>
              Close
            </Button>
          </Row>
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
