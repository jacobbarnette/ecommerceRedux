import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="background">
      <Header />
      <Home />
    </div>
  );
};

export default App;

/*

*/
