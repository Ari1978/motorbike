"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BotonContactar() {
  const [contactar, setContactar] = useState(false);
  const router = useRouter();

  const empezarContactar = () => {
    setContactar(true);

    setTimeout(() => {
      router.push("/contacto");
    }, 500);
  };

  return (
    <button
      onClick={empezarContactar}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={contactar}
    >
      {contactar ? "Contactando…" : "Contactar"}
    </button>
  );
}
