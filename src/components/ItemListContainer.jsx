import React, { useEffect, useState } from "react";
import Item from "./Item";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

return (
  <div className="container my-4">
    {/* ===== TÍTULO DE LA PÁGINA ===== */}
    <h1 className="catalog-title text-center mb-4">Tu Tienda de Zapatillas Online</h1>

    <div className="row g-4">
      {products.map((p) => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
          <Item product={p} />
        </div>
      ))}
    </div>
  </div>
);
}