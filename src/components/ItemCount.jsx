import React, { useState } from 'react';

export default function ItemCount({ stock, onAdd }) {
  const [qty, setQty] = useState(1);

  const handleIncrement = () => setQty(prev => Math.min(prev + 1, stock));
  const handleDecrement = () => setQty(prev => Math.max(prev - 1, 1));

  return (
    <div className="item-count">
      <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
      <span className="quantity">{qty}</span>
      <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
      <button className="btn btn-primary ms-2" onClick={() => onAdd(qty)}>
        Agregar al carrito
      </button>
    </div>
  );
}
