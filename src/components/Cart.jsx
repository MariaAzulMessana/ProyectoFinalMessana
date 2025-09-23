import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>El carrito está vacío.</p>;
  }

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="remove-btn">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <button onClick={clearCart} className="btn btn-secondary">Vaciar Carrito</button>
        <Link to="/checkout">
          <button className="btn btn-primary">Ir a Checkout</button>
        </Link>
      </div>
    </div>
  );
}
