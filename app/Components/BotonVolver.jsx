"use client";

import { useRouter } from "next/navigation";

export function BotonVolver() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
    >
      <span className="transition-transform group-hover:-translate-x-1">
        ←
      </span>
      Volver
    </button>
  );
}