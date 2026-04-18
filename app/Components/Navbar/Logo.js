"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Ir al inicio"
    >
      {/* Logo */}
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-800 shadow-md group-hover:shadow-blue-500/30 transition-all duration-300">
        <Image
          src="/img/Motorcycle_Logo.jpg"
          alt="Logo de Motorcicle"
          fill
          sizes="56px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Nombre */}
      <span className="hidden sm:block text-lg font-bold tracking-wide text-white group-hover:text-blue-500 transition-colors">
        Motorcicle
      </span>
    </Link>
  );
};

export default Logo;