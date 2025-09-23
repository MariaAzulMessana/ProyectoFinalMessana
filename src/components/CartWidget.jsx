import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { cart, totalItems, removeItem, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const toggleCart = () => setOpen(!open);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <button
        onClick={toggleCart}
        style={{
          padding: "10px 15px",
          borderRadius: "50px",
          backgroundColor: "#646cff",
          color: "#fff",
          border: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🛒 {totalItems} Productos
      </button>

      {open && (
        <div
          style={{
            marginTop: "10px",
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
            background: "#fff",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", margin: 0 }}>El carrito está vacío</p>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      marginBottom: "12px",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "8px",
                    }}
                  >
                    <strong>{item.name}</strong> <br />
                    Cantidad: {item.quantity} <br />
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        marginTop: "5px",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#ff4d4f",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={clearCart}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "8px 0",
                  borderRadius: "5px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
