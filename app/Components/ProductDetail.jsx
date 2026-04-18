"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Image from "next/image";

export default function ProductDetail({ product }) {
  const { agregarAlCarrito } = useContext(CartContext);

  if (!product) return <p>Producto no encontrado</p>;

  const { name, image, description, price, stock } = product;

  const handleAgregar = (quantity) => {
    if (quantity > stock) return;

    agregarAlCarrito({ ...product, quantity });
    alert("Producto agregado al carrito");
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-img-container">
          <div className="relative w-full h-full">
            <Image
              src={image || "/placeholder.jpg"}
              alt={name}
              fill
              className="product-detail-img"
            />
          </div>
        </div>

        <div className="product-detail-info">
          <h2 className="product-detail-title">{name}</h2>

          <p className="product-detail-description">{description}</p>

          <p className="product-detail-price">
            Precio: ${price.toLocaleString("es-AR")}
          </p>

          <p className="product-detail-stock">Stock: {stock}</p>

          <ItemCount initial={1} stock={stock} onAdd={handleAgregar} />
        </div>
      </div>
    </div>
  );
}
