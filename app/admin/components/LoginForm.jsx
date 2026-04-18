"use client";

import { useAuthContext } from "../../context/AuthContext";
import { handleChange } from "../../utils/handleChange";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function LoginForm() {
  const { login, loginWithGoogle } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { success, user } = await login(values.email, values.password);

      if (!success || !user) {
        setError("Credenciales incorrectas");
        return;
      }

      // 🔒 CONTROL ADMIN
      if (user.email !== "admin@email.com") {
        setError("No tenés permisos de administrador");
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
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
    <div className="flex items-center justify-center py-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-xl border border-zinc-800"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Iniciar sesión
        </h2>

        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-zinc-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange({ e, setValues, values })}
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-zinc-300 mb-2">Contraseña</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={(e) => handleChange({ e, setValues, values })}
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mb-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-2 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
        >
          <Image
            src="/google-icon.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Google
        </button>
      </form>
    </div>
  );
}
