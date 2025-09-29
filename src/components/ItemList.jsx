import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  if (!products.length) return <p className="text-center mt-4">No hay productos disponibles.</p>;

  return (
    <div className="row g-4">
      {products.map((p) => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
          <Item product={p} />
        </div>
      ))}
    </div>
  );
}
