import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw4kJYIny8BM0EPlPk_zqHa1Ia8hYS5ig",
  authDomain: "motorbike-next.firebaseapp.com",
  projectId: "motorbike-next",
  storageBucket: "motorbike-next.firebasestorage.app",
  messagingSenderId: "636975807889",
  appId: "1:636975807889:web:fa3dc83af20ab55d832e30"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);