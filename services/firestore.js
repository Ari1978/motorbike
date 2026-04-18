import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// 🔹 TODOS LOS PRODUCTOS / POR MARCA
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
    console.error("Error al obtener productos:", error);
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

export const createProduct = async (producto) => {
  try {
    const ref = collection(db, "motorbike");
    const docRef = await addDoc(ref, producto);

    return docRef.id;
  } catch (error) {
    console.error("Error creando producto:", error);
    throw error;
  }
};

// 🔹 ACTUALIZAR PRODUCTO
export const updateProduct = async (id, data) => {
  try {
    const ref = doc(db, "motorbike", id);

    await updateDoc(ref, data);

  } catch (error) {
    console.error("Error actualizando producto:", error);
    throw error;
  }
};

// 🔹 ELIMINAR PRODUCTO
export const deleteProduct = async (id) => {
  try {
    const ref = doc(db, "motorbike", id);
    await deleteDoc(ref);
  } catch (error) {
    console.error("Error eliminando producto:", error);
    throw error;
  }
};