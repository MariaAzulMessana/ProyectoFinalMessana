import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
