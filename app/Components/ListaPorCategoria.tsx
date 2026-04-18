"use client";

import { useEffect, useState } from "react";
import { getProductsByCategory } from "../firebase/getProducts";
import { ProductCard } from "./ProductCard";
import Loader from "./Loader";

type Product = {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
};

type ListaPorCategoriaProps = {
  category: string;
};

export default function ListaPorCategoria({
  category,
}: ListaPorCategoriaProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedProducts = await getProductsByCategory(
          category === "all" ? undefined : category
        );

        setProducts(Array.isArray(fetchedProducts) ? fetchedProducts : []);
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("Hubo un error al cargar los productos. Intentá de nuevo.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center">
        <p className="font-medium text-red-400">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <p className="text-zinc-300">
          No hay productos disponibles para esta categoría.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.id ?? `${product.name}-${index}`}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}