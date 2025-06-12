"use client";

import { useAuthContext } from "../../context/AuthContext";
import { handleChange } from "../../utils/handleChange";
import { useState } from "react";

export function LoginForm() {
  const { login, loginWithGoogle } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { success } = await login(values.email, values.password);
    if (success) {
      // Redirige a tu página en Firebase Hosting
      window.location.href = "https://motorbike-next.firebaseapp.com/admin";
    } else {
      setError("Credenciales incorrectas, intenta nuevamente.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await loginWithGoogle(); 
      window.location.href = "https://motorbike-next.firebaseapp.com/admin";
    } catch (err) {
      setError("Error al iniciar sesión con Google.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>

        {error && (
          <p className="mb-4 text-red-600 font-medium text-center">{error}</p>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={(e) => handleChange({ e, setValues, values })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={(e) => handleChange({ e, setValues, values })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mb-4 py-2 px-4 rounded-md text-white transition-colors ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center py-2 px-4 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
        >
          <img src="/google-icon.svg" alt="Google Icon" className="w-5 h-5 mr-2" />
          Iniciar sesión con Google
        </button>
      </form>
    </div>
  );
}
