import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    if (!product) return;
    console.log("Agregando al carrito:", product, quantity);
    addItem(product, quantity);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al traer producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

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
