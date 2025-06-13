import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse group"
      aria-label="Ir al inicio"
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500 group-hover:ring-blue-700 transition duration-200 shadow-md">
        <Image
          src="/img/Motorcycle_Logo.jpg"
          alt="Logo de Motorbike"
          title="Inicio"
          fill
          sizes="56px"  // <- Esto soluciona el warning
          className="object-cover"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
