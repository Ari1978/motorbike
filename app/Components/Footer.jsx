import React from 'react';
import Link from 'next/link'; 




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Motorcicle</h2>
          <p className="text-sm">Pasión por las motos, libertad sobre dos ruedas.</p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Secciones</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="/scooters" className="hover:text-white transition">Scooters</Link></li>
            <li><Link href="/enduro" className="hover:text-white transition">Enduro</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
          <p className="text-sm">📧 info@motorcicle.com</p>
          <p className="text-sm">📞 +54 11 2345 6789</p>
          <p className="text-sm">📍 Buenos Aires, Argentina</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Motorcicle. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
