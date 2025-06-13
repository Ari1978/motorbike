import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div className="itemcount-container flex flex-col items-center gap-4 w-full">
      {/* Controles + / - */}
      <div className="itemcount-controls flex items-center gap-4">
        <button
          onClick={disminuir}
          className="w-10 h-10 rounded-md border border-gray-300 bg-white text-xl font-bold hover:bg-gray-100 transition"
        >
          −
        </button>
        <span className="text-lg font-semibold text-gray-700">{cantidad}</span>
        <button
          onClick={aumentar}
          className="w-10 h-10 rounded-md border border-gray-300 bg-white text-xl font-bold hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>

      {/* Botón Agregar al carrito */}
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
