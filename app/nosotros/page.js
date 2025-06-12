import "../globals.css";
import { BotonVolver } from "../Components/BotonVolver";


export const metadata = {
  title: "Motorcicle - Nosotros",
  description: "Conocé más sobre nosotros y nuestra pasión por las motocicletas.",
  domain: "https://motorcicle.com",
  keywords: [
    "E-Commerce",
    "Motos",
    "Nosotros",
    "Next.js",
    "Tailwind CSS"
  ]
};

export default function Nosotros() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">
          Motorcicle
        </h1>
        <p className="text-lg leading-relaxed mt-4">
          En <span className="font-semibold text-blue-600">Motorcicle</span> nos apasionan las motos tanto como a vos. Nos dedicamos a ofrecerte las mejores opciones del mercado en <span className="font-semibold text-blue-500">Scooters, Naked, Enduro</span> y más.
        </p>
        <p className="text-lg leading-relaxed mt-4 nosotros-p">
          Nuestro equipo está conformado por <span className="italic">fanáticos del motor</span> que creen en el poder de la libertad sobre dos ruedas. Compartimos tu espíritu aventurero y estamos para ayudarte a encontrar la moto ideal.
        </p>
      </div>
      <div className="img-nosotros">
        <img
        src="https://fulltimemotos.com.ar/wp-content/uploads/cuanto-gana-un-vendedor-de-motos-en-espana-1.webp"
        alt="Moto"
        className="w-80 h-auto rounded-lg shadow-md mb-6"
      />
      <img
        src="https://www.shutterstock.com/image-photo/saleswoman-dealership-showroom-talking-customer-260nw-1185640990.jpg"
        alt="Moto"
        className="w-80 h-auto rounded-lg shadow-md mb-6"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uTnfn-JzUm4bbAPbg9deLPa0uMG8ikz6ykxg06bit_7ZPk5zgpU6lTNM3SfQpAuuO1o&usqp=CAU"
        alt="Moto"
        className="w-80 h-auto rounded-lg shadow-md mb-6"
      />
      <img
        src="https://img.freepik.com/foto-gratis/hombre-eligio-motocicletas-tienda-motos-chico-chaqueta-negra-gerente-cliente_1157-43592.jpg?w=360"
        alt="Moto"
        className="w-80 h-auto rounded-lg shadow-md mb-6"
      />
      </div>
      <div className="flex justify-center mt-6">
        <BotonVolver />
      </div>
    </section>

    
  );
}
