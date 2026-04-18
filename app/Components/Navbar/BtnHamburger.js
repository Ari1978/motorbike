"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BtnHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Scooters", href: "/scooters" },
    { label: "Naked", href: "/naked" },
    { label: "Enduro", href: "/enduro" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="relative">
      {/* Botón */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        className="md:hidden p-2 rounded-lg text-gray-800 dark:text-white hover:bg-zinc-800 transition"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menú */}
      <nav
        className={`absolute right-0 top-12 z-50 w-52 rounded-xl border border-zinc-800 bg-zinc-900/95 backdrop-blur-md shadow-xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 transition rounded-md"
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