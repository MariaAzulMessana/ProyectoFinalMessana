import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const createOrder = async (orderData) => {
  try {
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: serverTimestamp()
    });
    return docRef.id; // devuelve el ID de la orden generada
  } catch (error) {
    console.error("Error creando la orden:", error);
    throw error;
  }
};
