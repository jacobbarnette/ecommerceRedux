import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Card, Container, Row, Col } from "react-bootstrap";

import Header from "../../components/Header";
import ItemCard from "./ItemCard";
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

  const itemList = items.items.map((item, i) => {
    console.log(item);
    return <ItemCard id={i} item={item}></ItemCard>;
  });

  return (
    <Container>
      <Header />
      <div className="itemCard">
        <Container fluid>
          <Row>{itemList}</Row>
        </Container>
      </div>
    </Container>
  );
};

export default ItemPage;
