import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2023/02/16/3d-Rendering-404-Page-Error-Icon-Graphics-61433451-1-1-580x425.jpg"
          alt="404 error"
          className="notfound-image"
        />
        <h3 className="notfound-title">Página no encontrada</h3>
        <p className="notfound-message">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link href="/" className="notfound-link">
          Regresar a la página principal
        </Link>
      </div>
    </div>
  );
}


