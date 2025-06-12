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
    return <p className="carrito-vacio">El carrito está vacío</p>;

  return (
  <div className="carrito">
    <h1>Carrito de Compras</h1>
    <div className="carrito-grid">
      {cart.map((item) => {
        const precio = Number(item.price) || 0;
        const cantidad = Number(item.quantity) || 0;
        const subtotal = precio * cantidad;

        return (
          <div key={item.id} className="carrito-item">
            <img src={item.image} alt={item.name} />
            <div className="carrito-info">
              <h3>{item.name}</h3>
              <p>Precio unitario: ${precio.toFixed(2)}</p>
              <p>Cantidad: {cantidad}</p>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            </div>
          </div>
        );
      })}
    </div>
    <div className="carrito-total">
      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
      <button className="finalizar" onClick={finalizarCompra}>Finalizar Compra</button>
    </div>
  </div>
);
}