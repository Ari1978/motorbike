
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "./config";  

// Inicializar Firestore
const db = getFirestore(firebaseApp);

// Función para obtener los productos por categoría desde la colección 'motorbike'
export const getProductsByCategory = async (category) => {
  try {
    const motorbikeCollection = collection(db, "motorbike"); // Usamos la colección 'motorbike'
    const q = query(motorbikeCollection, where("category", "==", category)); // Filtramos por categoría
    const querySnapshot = await getDocs(q);

    const productsList = querySnapshot.docs.map(doc => ({
      id: doc.id,  // Incluimos el ID del documento
      ...doc.data(),  // Los datos del documento
    }));
    
    return productsList;
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    throw error;  // Vuelve a lanzar el error
  }
};

// Función para obtener los productos por marca desde la colección 'motorbike'
export const getProductsByMarca = async (marca) => {
  try {
    const motorbikeCollection = collection(db, "motorbike"); // Usamos la colección 'motorbike'

    let q;
    
    if (marca && marca !== "all") {
    
      q = query(motorbikeCollection, where("marca", "==", marca));
    } else {
    
      q = query(motorbikeCollection);
    }

    const querySnapshot = await getDocs(q);

    
    const productsList = querySnapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data(), 
    }));

    return productsList;  
  } catch (error) {
    console.error("Error al obtener productos por marca:", error);
    throw error;  // Vuelve a lanzar el error
  }
};

// Función para obtener un producto por ID desde la colección 'motorbike'
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "motorbike", id);  
    const docSnap = await getDoc(productRef);  

    if (docSnap.exists()) {
      const product = docSnap.data();  
      return { id, ...product };  
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};
