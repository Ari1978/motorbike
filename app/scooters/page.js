

import React from "react";
import ListaPorCategoria from "../Components/ListaPorCategoria";
import { BotonVolver } from "../Components/BotonVolver";


export const metadata = {
  title: "Motorcicle - Scooters",
  description: "Explora nuestra colección de scooters: agilidad, eficiencia y estilo.",
  domain: "https://motorcicle.com",
  keywords: [
    "E-Commerce",
    "Motos",
    "Scooters",
    "Next.js",
    "Tailwind CSS"
  ]
};

export default function ScootersPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 to-gray-600 text-white min-h-screen">
      {/* Título llamativo con un enfoque moderno y enérgico */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
        Conquista el Terreno: Las Mejores Motos Scooters para Aficionados
      </h1>

      {/* Descripción vibrante para la categoría "Scooters" */}
      <p className="text-base md:text-lg text-center mb-8 max-w-3xl">
        Descubre nuestra exclusiva selección de motos Scooters, diseñadas para aquellos que buscan una experiencia ágil y versátil. Perfectas para la ciudad y fuera de ella, combinan eficiencia, estilo y tecnología avanzada para un rendimiento sin igual.
      </p>

      {/* Lista de productos filtrados por la categoría "scooters" */}
      <ListaPorCategoria category="scooters" />
      
      <BotonVolver />
    </div>
  );
}
