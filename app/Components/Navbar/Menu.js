"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/scooters", label: "Scooters" },
  { href: "/naked", label: "Naked" },
  { href: "/enduro", label: "Enduro" },
  { href: "/contacto", label: "Contacto" },
  { href: "/post", label: "Blog" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-700 dark:text-white hover:text-blue-500"
                }`}
              >
                {link.label}
              </Link>

              {/* underline animado */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}