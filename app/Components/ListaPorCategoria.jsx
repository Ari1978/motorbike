"use client";

import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../firebase/getProducts"; 
import { ProductCard } from "./ProductCard"; 
import Loader from "../Components/Loader"; 
const ListaPorCategoria = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedProducts = await getProductsByCategory(
          category === "all" ? undefined : category
        );
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("Hubo un error al cargar los productos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <Loader />;

  return (
    <div className="w-full max-w-5xl mx-auto lista-categorias">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-center">No hay productos disponibles para esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
    <ProductCard
      key={product.id || `${product.name}-${index}`}
      product={product}
      />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaPorCategoria;
