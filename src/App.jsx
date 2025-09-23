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
      {/* ===== NAVBAR ===== */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">SneakerZone</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Carrito 🛒</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== WIDGET CARRITO ===== */}
      {location.pathname !== "/cart" && <CartWidget />}

      {/* ===== RUTAS ===== */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
