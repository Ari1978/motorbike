"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded"
      >
        ← Volver
      </button>

      {/* CARD LOGIN */}
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-xl border border-zinc-800">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Acceso Admin
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}