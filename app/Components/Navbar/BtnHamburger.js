import React, { useState } from 'react';
import Link from 'next/link';

export default function BtnHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Scooters', href: '/scooters' },
    { label: 'Naked', href: '/naked' },
    { label: 'Enduro', href: '/enduro' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <div className="relative">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        className="md:hidden p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menú desplegable */}
      <nav
        className={`absolute right-0 top-12 z-50 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md transition-transform duration-300 ease-in-out origin-top-right transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col py-2">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)} // Cierra al hacer click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
