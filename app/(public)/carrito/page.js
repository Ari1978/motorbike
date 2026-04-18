"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CarritoPage() {
  const { cart, eliminarProducto, vaciarCarrito } = useContext(CartContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const total = cart.reduce((acc, item) => {
    const precio = Number(item.price) || 0;
    const cantidad = Number(item.quantity) || 0;
    return acc + precio * cantidad;
  }, 0);

  const totalItems = cart.reduce(
    (acc, item) => acc + (Number(item.quantity) || 0),
    0,
  );

  const finalizarCompra = () => {
    alert("¡Gracias por tu compra!");
    vaciarCarrito();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-zinc-400">El carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Tu Carrito</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => {
          const { description, quantity, price } = item;
          const cantidad = Number(quantity) || 0;
          const precio = Number(price) || 0;
          const subtotal = precio * cantidad;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-zinc-400 line-clamp-2">
                  {description || "Sin descripción"}
                </p>

                <p className="text-sm text-zinc-300 mt-1">
                  ${precio.toLocaleString("es-AR")} x {cantidad}
                </p>
              </div>

              <div className="flex flex-col justify-between items-end">
                <p className="text-blue-400 font-semibold text-lg">
                  ${subtotal.toLocaleString("es-AR")}
                </p>

                <button
                  onClick={() => eliminarProducto(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <h2 className="text-xl font-bold">
          Total ({totalItems} productos): ${total.toLocaleString("es-AR")}
        </h2>

        <Link
          href="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Seguir comprando
        </Link>

        <div className="flex gap-4">
          <button
            onClick={vaciarCarrito}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Vaciar Carrito
          </button>

          <button
            onClick={finalizarCompra}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
