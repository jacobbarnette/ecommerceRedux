import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Button, Card, Container, Col } from "react-bootstrap";
import React from "react";
import { addItemToCart } from "../cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="col-lg-4 col-md-6 col-sm-12"
    >
      <Col>
        <Container className="itemCardContainer">
          <div className="justify-content-center">
            <Card className="mt-5 cardClass">
              <div style={{ textAlign: "center" }}>
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={item.image}
                />
              </div>
              <Card.Body className="cardBody">
                <hr></hr>
                <div className="card-text-body">
                  <Card.Title className="card-description">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="py-2 itemPrice">
                    $ {item.price.toFixed(2)}
                  </Card.Text>
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
      </Col>{" "}
      <ToastContainer
        autoClose={2000}
        className={"Toastify__toast-container--top-center toastContainer"}
      />
    </motion.div>
  );
};

export default ItemCard;
