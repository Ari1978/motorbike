'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../../context/CartContext';

export default function Carrito() {
  const { cart } = useContext(CartContext);

  const totalCantidad = cart?.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <Link href="/carrito" className="flex items-center space-x-1">
      <ShoppingCart className="text-gray-700 dark:text-white w-6 h-6" />
      {totalCantidad > 0 && (
        <span className="cart-numero text-xs sm:text-sm font-semibold text-red-500">
          {totalCantidad}
        </span>
      )}
    </Link>
  );
}

