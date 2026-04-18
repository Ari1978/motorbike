'use client';

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
  // 🔥 Inicialización correcta (sin flicker)
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });


  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  
  const agregarAlCarrito = (product, quantity = 1) => {
    if (!product?.id) return;

    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };


  const eliminarProducto = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Vaciar carrito (limpia también localStorage)
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
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}