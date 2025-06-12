import React from 'react';
import Link from 'next/link'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Motorcicle</h2>
          <p>Pasión por las motos, libertad sobre dos ruedas.</p>
        </div>

        <div className="footer-links">
          <h3>Secciones</h3>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/scooters">Scooters</Link></li>
            <li><Link href="/enduro">Enduro</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contacto">
          <h3>Contacto</h3>
          <p>Email: info@motorcicle.com</p>
          <p>Tel: +54 11 2345 6789</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Motorcicle. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
