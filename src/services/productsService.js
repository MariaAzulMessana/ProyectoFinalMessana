import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const getAllProducts = async () => {
  const productsCol = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCol);
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
