import React from 'react';
import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <li>
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de inicio"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/nosotros"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de Nosotros"
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            href="/scooters"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de Scooters"
          >
            Scooters
          </Link>
        </li>
        <li>
          <Link
            href="/naked"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de Naked"
          >
            Naked
          </Link>
        </li>
        <li>
          <Link
            href="/enduro"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de Enduro"
          >
            Enduro
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir a la página de Contacto"
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link
            href="/post"
            className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 font-medium transition-colors"
            aria-label="Ir al Blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
