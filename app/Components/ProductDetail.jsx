'use client'; 

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';  
import ItemCount from './ItemCount';

export default function ProductDetail({ product }) {
  const { agregarAlCarrito } = useContext(CartContext); 
  if (!product) return <p>Producto no encontrado</p>;

  const { id, name, image, description, price, stock } = product;

  const handleAgregar = (quantity) => {
    
    agregarAlCarrito({ ...product, quantity });
    console.log("Producto agregado al carrito:", { ...product, quantity });
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        
        <div className="product-detail-img-container">
          <img src={image} alt={name} className="product-detail-img" />
        </div>

        <div className="product-detail-info">
         
          <h2 className="product-detail-title">{name}</h2>
          
          
          <p className="product-detail-description">{description}</p>
          
          
          <p className="product-detail-price">Precio: ${price}</p>

          
          <p className="product-detail-stock">Stock: {stock}</p>

          
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={handleAgregar} // Llamamos a la función handleAgregar cuando se haga clic
          />
        </div>
      </div>
    </div>
  );
}
