import React from "react";

import { selectAllCart } from "./cartSlice";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import { Container, Table } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector(selectAllCart);

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

  if (cart === undefined || cart.length === 0) {
    return (
      <div>
        <Header />
        <div>
          <h1 className="shoppingHeader">My Shopping Cart</h1>
          <h3 className="itemInCartString text-center">
            You have no items in your cart
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cartContainer container">
        <Header />
        <h1 className="shoppingHeader">My Shopping Cart</h1>
        <Container fluid>
          <Table striped hover>
            <thead>
              <tr>
                <th>Product</th>
                <th className="emptyTableHeader"></th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
            </tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Total : {cartTotal()} </th>
            </tr>
          </Table>
        </Container>
      </div>
    );
  }
};

export default Cart;
