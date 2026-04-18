import ListaPorCategoria from "../../Components/ListaPorCategoria";
import { BotonVolver } from "../../Components/BotonVolver";

export const metadata = {
  title: "Motorcicle | Enduro",
  description:
    "Descubrí nuestra colección de motos Enduro: aventura, rendimiento y resistencia.",
  keywords: ["E-Commerce", "Motos", "Enduro", "Next.js", "Tailwind CSS"],
};

export default function EnduroPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            Categoría
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Enduro
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Diseñadas para la aventura, la resistencia y el máximo rendimiento
            en terrenos exigentes. Encontrá modelos preparados para ir más allá.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
          <ListaPorCategoria category="enduro" />
        </section>

        <div className="flex justify-center">
          <BotonVolver />
        </div>
      </div>
    </main>
  );
}
