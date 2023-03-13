import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemPage from "./features/items/ItemPage";

import Contact from "./components/Contact";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
