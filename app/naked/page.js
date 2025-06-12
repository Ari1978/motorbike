
import React from "react";
import ListaPorCategoria from "../Components/ListaPorCategoria";
import { BotonVolver } from "../Components/BotonVolver";


export const metadata = {
  title: "Motorcicle - Naked",
  description: "Descubrí nuestra colección de motos Naked: estilo, potencia y versatilidad.",
  domain: "https://motorcicle.com",
  keywords: [
    "E-Commerce",
    "Motos",
    "Naked",
    "Next.js",
    "Tailwind CSS"
  ]
};

export default function NakedPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 to-gray-600 text-white min-h-screen">
      {/* Título con un enfoque audaz y moderno */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
        Libertad y Estilo: Motos Naked para los Amantes del Diseño Minimalista
      </h1>

      {/* Descripción para la categoría "Naked", destacando su diseño y potencia */}
      <p className="text-base md:text-lg text-center mb-8 max-w-3xl">
        Las motos Naked combinan lo mejor de la potencia y el diseño sin concesiones. Con un estilo crudo y urbano, estas motos son perfectas para quienes buscan una experiencia de conducción directa, sin comprometer el rendimiento ni la estética.
      </p>

      {/* Lista de productos filtrados por la categoría "naked" */}
      <ListaPorCategoria category="naked" />
      <BotonVolver />
    </div>
  );
}

