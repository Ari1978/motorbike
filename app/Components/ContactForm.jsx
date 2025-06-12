"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleCancel = () => {
    setSubmitted(false);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded shadow"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <p className="text-green-500 text-center mt-4">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </p>
      )}
    </div>
  );
}
