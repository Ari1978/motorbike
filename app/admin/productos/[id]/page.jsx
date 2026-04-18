"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById, updateProduct } from "@/services/firestore";

export default function EditarProducto() {
  const { id } = useParams();
  const router = useRouter();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getProductById(id);
        setProducto(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProducto();
  }, [id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, {
        ...producto,
        price: Number(producto.price),
        stock: Number(producto.stock),
      });

      alert("Producto actualizado 🚀");
      router.push("/admin/productos");

    } catch (error) {
      console.error(error);
      alert("Error al actualizar");
    }
  };

  if (loading) {
    return <p className="text-white">Cargando...</p>;
  }

  if (!producto) {
    return <p className="text-white">Producto no encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-xl mx-auto bg-zinc-900 p-6 rounded-xl border border-zinc-800">

        <h1 className="text-2xl font-bold mb-6">
          Editar Producto
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={producto.name}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <input
            name="price"
            type="number"
            value={producto.price}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <input
            name="image"
            value={producto.image}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <textarea
            name="description"
            value={producto.description || ""}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <input
            name="category"
            value={producto.category || ""}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <input
            name="marca"
            value={producto.marca || ""}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <input
            name="stock"
            type="number"
            value={producto.stock || 0}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">
            Guardar cambios
          </button>

        </form>
      </div>
    </div>
  );
}