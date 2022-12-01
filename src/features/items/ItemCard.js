import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Card, Container, Row, Col } from "react-bootstrap";

import { selectAllItems, fetchItems } from "./itemsSlice";
import React from "react";
import { addItemToCart } from "../cart/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  //const itemStatus = useSelector((state) => state.items.status);

  return (
    <Col>
      <div classname="card">
        <Card
          style={{
            width: "20rem",
            height: "30rem",
          }}
        >
          <Card.Img variant="top" className="cardImg" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title.substring(0, 20)}</Card.Title>
            <Card.Text>{item.description.substring(0, 100)}</Card.Text>

            <Button
              onClick={() => dispatch(addItemToCart(item))}
              variant="primary"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ItemCard;
