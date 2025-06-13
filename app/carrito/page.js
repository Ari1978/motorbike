"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../globals.css";

export default function CarritoPage() {
  const { cart, eliminarProducto, vaciarCarrito } = useContext(CartContext);

  // Calcular el total
  const total = cart.reduce((acc, item) => {
    const precio = Number(item.price) || 0;
    const cantidad = Number(item.quantity) || 0;
    return acc + precio * cantidad;
  }, 0);

  const finalizarCompra = () => {
    alert("¡Gracias por tu compra!");
    vaciarCarrito();
  };

  if (cart.length === 0)
    return <p className="carrito-vacio text-center text-lg mt-10">El carrito está vacío</p>;

  return (
    <div className="carrito px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Tu Carrito</h1>

      <div className="carrito-productos flex flex-col gap-4">
        {cart.map((item) => {
          const { detalles, quantity, price } = item;
          const cantidad = Number(quantity);
          const precio = Number(price);
          const subtotal = precio * cantidad;

          return (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-contain mx-auto md:mx-0"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Detalles: {detalles}</p>
                  <p className="text-sm">Precio unitario: ${precio.toFixed(2)}</p>
                  <p className="text-sm">Cantidad: {cantidad}</p>
                  <p className="text-sm font-medium text-blue-600">Subtotal: ${subtotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => eliminarProducto(item.id)}
                  className="mt-2 self-start bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carrito-total mt-8 flex flex-col items-end gap-4">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <div className="flex gap-4">
          <button
            onClick={vaciarCarrito}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Vaciar Carrito
          </button>
          <button
            onClick={finalizarCompra}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
