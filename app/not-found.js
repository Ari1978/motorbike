import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center">
        
        <Image
          src="https://images.unsplash.com/photo-1588422333078-82e91c2b52c8?q=80&w=800"
          alt="Error 404"
          width={400}
          height={300}
          className="rounded-2xl shadow-xl"
          priority
        />

        <h1 className="text-4xl font-bold tracking-tight">
          404 - Página no encontrada
        </h1>

        <p className="text-zinc-400">
          La página que estás buscando no existe o fue movida.
        </p>

        <Link
          href="/"
          className="mt-4 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
