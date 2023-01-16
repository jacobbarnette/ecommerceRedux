import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Spinner } from "react-bootstrap";

import Header from "../../components/Header";
import ItemCard from "./ItemCard";
import { selectAllItems, fetchItems } from "./itemsSlice";
import React from "react";

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
    return <ItemCard id={i} item={item}></ItemCard>;
  });

  if (itemStatus === "idle") {
    return <Spinner animation="border"></Spinner>;
  } else {
    return (
      <Container>
        <Header />
        <div className="itemCard">
          <Container fluid>
            <Row className="d-flex justify-content-center">{itemList}</Row>
          </Container>
        </div>
      </Container>
    );
  }
};

export default ItemPage;
