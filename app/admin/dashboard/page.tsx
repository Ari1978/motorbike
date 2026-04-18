"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Panel Admin</h1>

      <p className="text-zinc-400 mb-6">
        Gestión de productos
      </p>

      <div className="flex gap-4">
        <Link
          href="/admin/productos/nuevo"
          className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 inline-block"
        >
          Crear producto
        </Link>

        <Link href="/admin/productos">
          Ver productos
        </Link>
      </div>
    </div>
  );
}