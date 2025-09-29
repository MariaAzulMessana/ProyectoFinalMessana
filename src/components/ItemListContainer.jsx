import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q = collection(db, "products");

        if (categoryId) {
          q = query(collection(db, "products"), where("category", "==", categoryId));
        }

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;

  return (
    <div className="container my-4">
      <h1 className="catalog-title text-center mb-4">Tu Tienda de Zapatillas Online</h1>
      <ItemList products={products} />
    </div>
  );
}
