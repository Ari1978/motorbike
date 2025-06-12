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
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <nav
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-2 rounded shadow-lg transition-all duration-300 transform ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-gray-700 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
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
