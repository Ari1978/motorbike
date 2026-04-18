"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import { LoginForm } from "./components/LoginForm";

export default function AdminLayout({ children }) {
  const { user, loading, logout } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); // 👈 vuelve al home
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Cargando...
      </div>
    );
  }

  return user ? (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      
      {/* HEADER */}
      <header className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          <h1 className="text-xl font-bold">Panel Admin</h1>

          <div className="flex gap-3">
            {/* VOLVER AL HOME */}
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded text-sm"
            >
              Inicio
            </button>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {children}
      </main>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Acceso Admin
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}