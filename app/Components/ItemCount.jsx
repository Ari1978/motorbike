import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad((prev) => prev + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(cantidad);
    }
  };

  return (
    <div className="itemcount-container flex flex-col items-center gap-4 w-full">
      <div className="itemcount-controls flex items-center gap-4">
        <button
          onClick={disminuir}
          disabled={cantidad === 1}
          className="w-10 h-10 rounded-md border border-gray-300 bg-gray-500 text-xl font-bold hover:bg-gray-800 transition disabled:opacity-50"
        >
          −
        </button>

        <span className="text-lg font-semibold text-gray-700">{cantidad}</span>

        <button
          onClick={aumentar}
          disabled={cantidad === stock}
          className="w-10 h-10 rounded-md border border-gray-300 bg-gray-500 text-xl font-bold hover:bg-gray-800 transition disabled:opacity-50"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto disabled:opacity-50"
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}