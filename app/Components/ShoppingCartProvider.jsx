"use client";

import React, { useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const productoExistente = prevCart.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCart.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + producto.quantity }
            : item
        );
      } else {
        return [...prevCart, producto];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      agregarAlCarrito,
      eliminarProducto,
      vaciarCarrito
    }}>
      {children}
    </CartContext.Provider>
  );
}
