"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/services/firestore";

export default function NuevoProducto() {
  const router = useRouter();

  const [producto, setProducto] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    marca: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!producto.name || !producto.price) {
      alert("Nombre y precio son obligatorios");
      return;
    }

    try {
      setLoading(true);

      await createProduct({
        ...producto,
        price: Number(producto.price),
        stock: Number(producto.stock),
      });

      alert("Producto creado 🚀");

      router.push("/admin/productos");

    } catch (error) {
      alert("Error al crear producto");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-xl mx-auto bg-zinc-900 p-6 rounded-xl border border-zinc-800">

        <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm transition"
        >
          ← Volver
        </button>

        <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
      </div>

        <h1 className="text-2xl font-bold mb-6">
          Nuevo Producto
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            name="price"
            placeholder="Precio"
            type="number"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            name="image"
            placeholder="URL imagen"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <textarea
            name="description"
            placeholder="Descripción"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            name="category"
            placeholder="Categoría (ej: naked)"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            name="marca"
            placeholder="Marca (ej: honda, yamaha)"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <input
            name="stock"
            placeholder="Stock"
            type="number"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            {loading ? "Guardando..." : "Guardar producto"}
          </button>

        </form>
      </div>
    </div>
  );
}