"use client"; 
import "../globals.css";


import { useState, useEffect } from "react";
import { getProductsByMarca } from "../firebase/getProducts"; 
import { ProductCard } from "./ProductCard"; 
import Loader from "./Loader";

const marcas = ["all", "bajaj", "yamaha", "benelli", "kymco", "vodge"]; 

export default function ListaPorMarca() {
  const [selectedMarca, setSelectedMarca] = useState("all"); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchProducts = async () => {
    setLoading(true);
    setError(null); 

    console.log("Marca seleccionada:", selectedMarca); 
    try {
      
      const allProducts = await getProductsByMarca(
        selectedMarca === "all" ? undefined : selectedMarca 
      );
      setFilteredProducts(allProducts); 
    } catch (error) {
      setError("Error al obtener los productos. Intenta de nuevo."); 
      console.error("Error al obtener los productos:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedMarca]); 

  return (
    <div className="w-full max-w-5xl mx-auto lista-marcas">
      <div className="flex space-x-4 border-b mb-5">
        {marcas.map((marca) => (
          <button
            key={marca}
            aria-selected={selectedMarca === marca}
            className={`py-2 px-4 font-semibold ${
              selectedMarca === marca
                ? "border-b-2 border-blue-500 text-blue-200"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setSelectedMarca(marca)} 
          >
            {marca.charAt(0).toUpperCase() + marca.slice(1)} 
          </button>
        ))}
      </div>

      {/* Mostrar error si ocurre */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Cargando productos */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center">No hay productos con esa marca.</p>
          )}
        </div>
      )}
    </div>
  );
}
