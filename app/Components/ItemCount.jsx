'use client';

import React, { useState } from "react";
import "../globals.css";

export default function ItemCount({ initial = 0, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAgregar = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="itemcount-container">
      <div className="itemcount-controls">
        <button
          onClick={() => setCount(Math.max(count - 1, 0))}
          className="itemcount-btn"
          disabled={count === 0}
        >
          −
        </button>
        <span className="itemcount-number">{count}</span>
        <button
          onClick={() => setCount(Math.min(count + 1, stock))}
          className="itemcount-btn"
          disabled={count === stock}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAgregar}
        className={`itemcount-add ${count === 0 ? "disabled" : ""}`}
        disabled={count === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
