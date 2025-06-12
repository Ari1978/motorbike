"use client";


import { useAuthContext } from "../../context/AuthContext";
import { LoginForm } from "../components/LoginForm"; // Asegúrate que la ruta sea correcta

export default function AdminLayout({ children }) {
  const { user, logout } = useAuthContext();

  return (
    <>
      {user.isAuthenticated ? (
        <>
          <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
              >
                Logout
              </button>
            </div>
          </header>
          <main>{children}</main>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <LoginForm />
        </div>
      )}
    </>
  );
}
