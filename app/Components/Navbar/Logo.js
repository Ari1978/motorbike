import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="/img/Motorcycle_Logo.jpg"
        height={60}
        width={60}
        alt="Logo"
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
