
'use client';

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log('Carrito actualizado:', cart);
  }, [cart]);

  const agregarAlCarrito = (product, quantity = 1) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const eliminarProducto = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
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
