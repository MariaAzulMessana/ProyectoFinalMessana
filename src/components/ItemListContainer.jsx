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

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;
  if (!products.length) return <p className="text-center mt-4">No hay productos disponibles.</p>;


  return (
    <div className="container my-4">
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