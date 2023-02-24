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

  if (itemStatus === "idle" || itemStatus === "loading") {
    return (
      <div className="spinnerDiv">
        <Header />
        <Spinner
          style={{ width: "4rem", height: "4rem" }}
          className="spinner"
          size="xxl"
          animation="border"
        ></Spinner>
      </div>
    );
  } else {
    return (
      <Container>
        <Header />
        <div className="py-5 itemCard">
          <Container className="py-5" fluid>
            <Row className="d-flex justify-content-center">{itemList}</Row>
          </Container>
        </div>
      </Container>
    );
  }
};

export default ItemPage;
