"use client";

import { useState } from "react";
import { handleChange } from "../../utils/handleChange";

export function CreateForm() {
  const [data, setData] = useState({
    name: "",
    slug: "",
    marca: "",
    imageUrl: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    setData((prevData) => ({
      ...prevData,
      price: parseFloat(prevData.price),
      stock: parseInt(prevData.stock),
    }));

    console.log("Submitting data:", data);

    if (!data.name || !data.slug || !data.description) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (data.price <= 0 || data.stock <= 0) {
      alert("El precio y la cantidad en stock deben ser mayores a 0.");
      return;
    }

    const imageUrlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i;
    if (!imageUrlRegex.test(data.imageUrl)) {
      alert("Por favor, proporciona una URL de imagen válida.");
      return;
    }

    // Petición POST
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error al crear producto:", error);
      return;
    }

    const result = await response.json();
    console.log("Producto creado satisfactoriamente:", result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded shadow-md max-w-xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Crear nuevo producto
      </h2>

      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Nombre del producto"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <textarea
        name="description"
        value={data.description}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Descripción"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="slug"
        value={data.slug}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Slug"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="number"
        name="price"
        value={data.price}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Precio"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="number"
        name="stock"
        value={data.stock}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Cantidad en stock"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="text"
        name="marca"
        value={data.marca}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Marca"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        name="category"
        value={data.category}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Categoría"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        name="imageUrl"
        value={data.imageUrl}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="URL de la imagen"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Crear producto
      </button>
    </form>
  );
}
