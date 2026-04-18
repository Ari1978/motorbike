import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

// 🔹 POR CATEGORÍA
export const getProductsByCategory = async (category) => {
  try {
    const ref = collection(db, "motorbike");
    const q = query(ref, where("category", "==", category));
    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
  } catch (error) {
    console.error("Error categoría:", error);
    throw error;
  }
};

// 🔹 POR MARCA
export const getProductsByMarca = async (marca) => {
  try {
    const ref = collection(db, "motorbike");

    const q =
      marca && marca !== "all"
        ? query(ref, where("marca", "==", marca))
        : ref;

    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
  } catch (error) {
    console.error("Error marca:", error);
    throw error;
  }
};

// 🔹 POR ID
export const getProductById = async (id) => {
  try {
    const ref = doc(db, "motorbike", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    return { id, ...snap.data() };
  } catch (error) {
    console.error("Error producto:", error);
    return null;
  }
};