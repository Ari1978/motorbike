
import BotonContactar from "./Components/BotonContactar";
import Descripcion from "./Components/Descripcion";
import Titulo from "./Components/Titulo";
import ListaPorMarca from "./Components/ListaPorMarca";
// No hace falta importar DetalleDelProducto acá si es una página dinámica

export const metadata = {
  title: "Motorcicle",
  description: "Venta de motocicletas app",
  domain: "https://motorcicle.com",
  keywords: [
    "E-Commerce",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
};

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:px-12 font-sans home-img" style={{ backgroundImage: "url('https://example.com/path-to-your-background-image.jpg')" }}>
      <img
        src="https://www.yamahamotos.cl/wp-content/uploads/2019/10/bol7.jpg"
        alt="Moto"
        width={320}  
        height={240} 
        className="w-80 h-auto rounded-lg shadow-md mb-6"
      />
      <Titulo />
      <Descripcion />
      <BotonContactar />
      <ListaPorMarca />
    </div>
  );
}
