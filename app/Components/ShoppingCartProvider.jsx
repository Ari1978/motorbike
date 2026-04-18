"use client";

import React, { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function ShoppingCartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // 🔥 Guardar en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // 🔥 Agregar producto
  const agregarAlCarrito = (producto) => {
    if (!producto?.id) return;

    setCart((prevCart) => {
      const productoExistente = prevCart.find(
        (item) => item.id === producto.id,
      );

      if (productoExistente) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                quantity: item.quantity + (producto.quantity || 1),
              }
            : item,
        );
      } else {
        return [
          ...prevCart,
          {
            ...producto,
            quantity: producto.quantity || 1,
          },
        ];
      }
    });
  };

  // 🔥 Eliminar producto
  const eliminarProducto = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔥 Vaciar carrito
  const vaciarCarrito = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
