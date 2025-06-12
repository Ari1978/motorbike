"use client";

import Carrito from "./Navbar/Carrito";

import Logo from "./Navbar/Logo";
import BtnHamburger from "./Navbar/BtnHamburger";
import Menu from "./Navbar/Menu";

const menuItems = ["Nosotros", "Scooters", "Naked", "Enduro", "Contacto"]; 

export default function Navbar() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />

        {/* Menú desktop */}
        <div className="hidden md:flex">
          <Menu items={menuItems} />
        </div>

        {/* Carrito y hamburguesa */}
        <div className="flex items-center space-x-4">
          <Carrito />
          <BtnHamburger menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
};


