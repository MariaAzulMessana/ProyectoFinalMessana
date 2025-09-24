import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../services/OrderService";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: ""
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const orderData = {
      buyer: userData,
      items: cart,
      total
    };

    try {
      const id = await createOrder(orderData);
      setOrderId(id);
      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      alert("Hubo un error al procesar la orden. Intenta nuevamente.");
    }
  };

  if (orderPlaced) {
    return (
      <div style={styles.container}>
        <h2 style={styles.successTitle}>¡Compra realizada con éxito! ✅</h2>
        <p style={styles.text}>Gracias <strong>{userData.name}</strong>, tu pedido fue confirmado.</p>
        <p style={styles.text}><strong>ID de la orden:</strong> {orderId}</p>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      {cart.length === 0 ? (
        <p style={styles.text}>Tu carrito está vacío.</p>
      ) : (
        <>
          <div style={styles.cartSummary}>
            <h3 style={{ marginBottom: "10px" }}>Resumen de tu carrito</h3>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div style={styles.total}>
              <strong>Total: ${total}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={{ marginBottom: "10px" }}>Datos del comprador</h3>

            <label style={styles.label}>Nombre:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <label style={styles.label}>Dirección:</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Confirmar compra
            </button>
          </form>
        </>
      )}
    </div>
  );
}

// Estilos
const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "30px auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  },
  successTitle: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#28a745"
  },
  text: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#555"
  },
  cartSummary: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    borderBottom: "1px solid #eee"
  },
  total: {
    marginTop: "10px",
    textAlign: "right",
    fontSize: "1.1em",
    fontWeight: "bold"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "5px",
    fontWeight: "500",
    color: "#333"
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1em"
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s"
  }
};
