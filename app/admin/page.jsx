"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        Panel de Administración
      </h1>

      <p className="text-zinc-400 mb-6 text-center max-w-md">
        Accedé al panel para gestionar productos, pedidos y contenido del sitio.
      </p>

      <Link
        href="/admin/login"
        className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition font-medium"
      >
        Iniciar sesión
      </Link>
    </div>
  );
}