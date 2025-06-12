

"use client";  
import { useRouter } from "next/navigation";

export function BotonVolver() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}  // Volver a la página anterior
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Volver
    </button>
  );
}

