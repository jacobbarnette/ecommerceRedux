import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
