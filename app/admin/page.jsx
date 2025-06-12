"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <p className="text-gray-700 mb-6">
        Bienvenido al área de administración. Desde aquí puedes gestionar tu sitio.
      </p>
      <Link
        href="/admin/login"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Ir al login
      </Link>
    </div>
  );
}



