import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Spinner } from "react-bootstrap";

import Header from "../../components/Header";
import ItemCard from "./ItemCard";
import { selectAllItems, fetchItems } from "./itemsSlice";
import React, { useState } from "react";
import Pagination from "react-js-pagination";

const ItemPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const itemStatus = useSelector((state) => state.items.status);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    if (itemStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemStatus, dispatch]);

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = items.items.slice(indexOfFirstItem, indexOfLastItem);

  const itemList = currentItems.map((item, i) => {
    return <ItemCard currentItems={currentItems} key={i} item={item} />;
  });

  console.log(indexOfFirstItem, indexOfLastItem, currentItems);
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
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={items.items.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            className="pagination"
            hideNavigation={true}
          />
        </div>
      </Container>
    );
  }
};

export default ItemPage;
