"use client";

import { useContext } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/CartContext";

export default function Carrito() {
  const { cart } = useContext(CartContext);

  const totalCantidad = cart?.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <Link
      href="/carrito"
      className="relative flex items-center justify-center p-2 rounded-lg hover:bg-zinc-800 transition"
    >
      <ShoppingCart className="text-gray-700 dark:text-white w-6 h-6" />

      {/* badge */}
      <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1">
        {totalCantidad || 0}
      </span>
    </Link>
  );
}