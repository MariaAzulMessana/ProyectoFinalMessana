import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem({ ...product, quantity });
    setAdded(true);
  };

  return (
    <div className="item-detail-card" style={{ maxWidth: "400px", margin: "20px auto", padding: "20px" }}>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <p className="added-msg">Agregado al carrito ✅</p>
      )}
    </div>
  );
}
