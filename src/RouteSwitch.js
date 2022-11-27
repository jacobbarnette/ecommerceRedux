import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemPage from "./features/items/ItemPage";
import Cart from "./features/cart/Cart";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
