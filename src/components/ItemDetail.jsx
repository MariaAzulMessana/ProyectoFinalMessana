import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product, handleAdd, added }) {
  return (
    <div className="item-detail-card">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p className="price">Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <Link to="/cart" className="btn btn-success mt-2">Ir al carrito</Link>
      )}
    </div>
  );
}

