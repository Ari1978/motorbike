
// app/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Usamos las variables de entorno para configurar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAw4kJYIny8BM0EPlPk_zqHa1Ia8hYS5ig",
  authDomain: "motorbike-next.firebaseapp.com",
  projectId: "motorbike-next",
  storageBucket: "motorbike-next.firebasestorage.app",
  messagingSenderId: "636975807889",
  appId: "1:636975807889:web:fa3dc83af20ab55d832e30"
};

// Inicializamos Firebase
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, firebaseApp };
