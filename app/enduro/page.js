import React from "react";
import ListaPorCategoria from "../Components/ListaPorCategoria";
import { BotonVolver } from "../Components/BotonVolver";



export const metadata = {
  title: "Motorcicle - Enduro",
  description: "Descubrí nuestra colección de motos Enduro: aventura, rendimiento y resistencia.",
  domain: "https://motorcicle.com",
  keywords: [
    "E-Commerce",
    "Motos",
    "Enduro",
    "Next.js",
    "Tailwind CSS"
  ]
};

export default function EnduroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-700 text-white">
      {/* Título con estilo fuerte y aventurero */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
        ¡Desata tu Aventura! Las Motos Enduro para los más Audaces
      </h1>

      {/* Descripción destacada para la categoría "Enduro" */}
      <p className="text-base md:text-lg text-center mb-8 max-w-3xl">
        Las motos Enduro están diseñadas para quienes buscan emoción en cada terreno. Con una resistencia imbatible y tecnología de última generación, estas motos ofrecen lo mejor en aventuras todoterreno, permitiéndote conquistar caminos difíciles con confianza.
      </p>

      {/* Lista de productos filtrados por la categoría "enduro" */}
      <ListaPorCategoria category="enduro" />
      <BotonVolver />
    </div>
  );
}

