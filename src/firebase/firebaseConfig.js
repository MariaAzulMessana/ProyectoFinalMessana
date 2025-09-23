import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDMFXFZlC0IkVKkgJA0yGVBmS-6DBJ5bYc",
  authDomain: "proyectofinalmessana.firebaseapp.com",
  projectId: "proyectofinalmessana",
  storageBucket: "proyectofinalmessana.firebasestorage.app",
  messagingSenderId: "1087385632975",
  appId: "1:1087385632975:web:9aaf34098c4f043de277ba"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
