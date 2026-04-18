"use client";

import { useEffect, useState } from "react";
import { getProductsByMarca, deleteProduct } from "@/services/firestore";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductosAdminPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductsByMarca("all");
        setProductos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    const ok = confirm("¿Eliminar producto?");

    if (!ok) return;

    try {
      await deleteProduct(id);

      // 🔥 actualizar UI sin recargar
      setProductos((prev) => prev.filter((p) => p.id !== id));

    } catch (error) {
      console.error(error);
      alert("Error al eliminar");
    }
  };

  return (
    <div className="text-white max-w-7xl mx-auto px-4 py-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm transition"
        >
          ← Volver
        </button>

        <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-zinc-400 animate-pulse">
            Cargando productos...
          </p>
        </div>
      ) : productos.length === 0 ? (
        <p className="text-center text-zinc-500">
          No hay productos cargados
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {productos.map((p) => (
            <div
              key={p.id}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500 transition group shadow-md"
            >

              {/* IMAGEN */}
              {p.image && (
                <div className="overflow-hidden">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              )}

              {/* CONTENIDO */}
              <div className="p-4 flex flex-col gap-2">

                <h2 className="text-lg font-semibold group-hover:text-blue-400 transition">
                  {p.name}
                </h2>

                <p className="text-zinc-400 text-sm line-clamp-2">
                  {p.description || "Sin descripción"}
                </p>

                {/* PRECIO */}
                <div className="mt-3 flex items-center justify-between">

                  <span className="text-xl font-bold text-blue-400">
                    ${Number(p.price).toLocaleString()}
                  </span>

                  <div className="flex gap-2">

                    <button
                      onClick={() => router.push(`/admin/productos/${p.id}`)}
                      className="px-3 py-1 text-sm bg-yellow-600 hover:bg-yellow-700 rounded transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded transition"
                    >
                      Eliminar
                    </button>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}