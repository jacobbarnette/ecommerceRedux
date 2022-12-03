import { useDispatch } from "react-redux";

import { Button, Card, Container, Col } from "react-bootstrap";
import React from "react";
import { addItemToCart } from "../cart/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Col className="column">
      <Container>
        <div classname="card">
          <Card className="cardClass">
            <div className="cardImgContainer" style={{ textAlign: "center" }}>
              <Card.Img className="card-image" variant="top" src={item.image} />
            </div>

            <Card.Body className="cardBody">
              <div className="card-text-body">
                <Card.Title className="card-description">
                  {item.title}
                </Card.Title>

                <Card.Text className="itemPrice">$ {item.price}</Card.Text>
                <Button
                  className="addToCart"
                  onClick={() => dispatch(addItemToCart(item))}
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Col>
  );
};

export default ItemCard;
