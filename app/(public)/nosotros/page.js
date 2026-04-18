import Image from "next/image";
import { BotonVolver } from "../../Components/BotonVolver";

export const metadata = {
  title: "Motorcicle | Nosotros",
  description: "Conocé más sobre Motorcicle y nuestra pasión por las motocicletas.",
  keywords: ["E-Commerce", "Motos", "Nosotros", "Next.js", "Tailwind CSS"],
};

const imagenes = [
  "https://fulltimemotos.com.ar/wp-content/uploads/cuanto-gana-un-vendedor-de-motos-en-espana-1.webp",
  "https://www.shutterstock.com/image-photo/saleswoman-dealership-showroom-talking-customer-260nw-1185640990.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uTnfn-JzUm4bbAPbg9deLPa0uMG8ikz6ykxg06bit_7ZPk5zgpU6lTNM3SfQpAuuO1o&usqp=CAU",
  "https://img.freepik.com/foto-gratis/hombre-eligio-motocicletas-tienda-motos-chico-chaqueta-negra-gerente-cliente_1157-43592.jpg?w=360",
];

export default function Nosotros() {
  return (
    <main className="bg-white px-6 py-16 text-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <section className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Sobre nosotros
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Motorcicle
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            En <span className="font-semibold text-blue-600">Motorcicle</span>{" "}
            nos apasionan las motos tanto como a vos. Trabajamos para ofrecerte
            las mejores opciones del mercado en{" "}
            <span className="font-semibold text-blue-500">
              scooters, naked, enduro
            </span>{" "}
            y mucho más.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Nuestro equipo está formado por fanáticos del motor que creen en la
            libertad sobre dos ruedas. Queremos ayudarte a encontrar la moto
            ideal para tu estilo, tu necesidad y tu próxima aventura.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {imagenes.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-gray-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900"
            >
              <Image
                src={src}
                alt={`Imagen de la sección nosotros ${index + 1}`}
                width={500}
                height={350}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </section>

        <div className="flex justify-center">
          <BotonVolver />
        </div>
      </div>
    </main>
  );
}