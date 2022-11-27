import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Card } from "react-bootstrap";

import Header from "../../components/Header";
import { selectAllItems, fetchItems } from "./itemsSlice";
import React from "react";
import { addItemToCart } from "../cart/cartSlice";

const ItemPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const itemStatus = useSelector((state) => state.items.status);

  useEffect(() => {
    if (itemStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemStatus, dispatch]);

  const itemList = items.items.map((item) => {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
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
    );
  });
  return (
    <div>
      <Header />
      <div className="productCard">{itemList}</div>;
    </div>
  );
};

export default ItemPage;
