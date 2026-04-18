import ListaPorCategoria from "../../Components/ListaPorCategoria";
import { BotonVolver } from "../../Components/BotonVolver";

export const metadata = {
  title: "Motorcicle | Scooters",
  description:
    "Explorá nuestra colección de scooters: agilidad, eficiencia y estilo para la ciudad.",
  keywords: ["E-Commerce", "Motos", "Scooters", "Next.js", "Tailwind CSS"],
};

export default function ScootersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        
        {/* HERO */}
        <section className="text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            Categoría
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Scooters
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Agilidad, eficiencia y diseño para moverte por la ciudad sin límites.
            Descubrí scooters pensados para tu día a día.
          </p>
        </section>

        {/* LISTA */}
        <section className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
          <ListaPorCategoria category="scooters" />
        </section>

        {/* CTA */}
        <div className="flex justify-center">
          <BotonVolver />
        </div>
      </div>
    </main>
  );
}