import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartWidget from "./components/CartWidget";
import Checkout from "./pages/Checkout";


export default function App() {
  const location = useLocation();

  return (
    <div>
      <header>
        <NavBar />
      </header>

      {/* WIDGET CARRITO */}
      {location.pathname !== "/cart" && <CartWidget />}

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
