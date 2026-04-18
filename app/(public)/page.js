import Image from "next/image";
import BotonContactar from "../Components/BotonContactar";
import Descripcion from "../Components/Descripcion";
import Titulo from "../Components/Titulo";
import ListaPorMarca from "../Components/ListaPorMarca";

export const metadata = {
  title: "Motorcicle | Venta de motocicletas",
  description: "E-commerce de motocicletas desarrollado con Next.js y Tailwind CSS.",
  keywords: [
    "E-Commerce",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Motocicletas",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 sm:px-12">
        <div className="absolute inset-0 bg-[url('https://www.yamahamotos.cl/wp-content/uploads/2019/10/bol7.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://www.yamahamotos.cl/wp-content/uploads/2019/10/bol7.jpg"
              alt="Motocicleta destacada"
              width={700}
              height={450}
              className="h-auto w-full max-w-xl object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Titulo />
            <Descripcion />
            <BotonContactar />
          </div>

          <div className="mt-6 w-full rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <ListaPorMarca />
          </div>
        </div>
      </section>
    </main>
  );
}