'use client';

import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../firebase/config";  
import ListaPorMarca from "./ListaPorMarca";  
import ListaPorCategoria from "./ListaPorCategoria";  

const db = getFirestore(firebaseApp);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products")); 
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (err) {
        setError("Hubo un problema al obtener los productos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ListaPorMarca products={products} />  
      <ListaPorCategoria products={products} />  
    </div>
  );
};

export default ProductList;
