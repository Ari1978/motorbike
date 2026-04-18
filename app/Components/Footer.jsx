import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 py-12 text-zinc-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Marca */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">Motorcicle</h2>
          <p className="text-sm text-zinc-500">
            Pasión por las motos. Libertad sobre dos ruedas.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Inicio" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/scooters", label: "Scooters" },
              { href: "/enduro", label: "Enduro" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Contacto
          </h3>
          <div className="space-y-2 text-sm">
            <p>info@motorcicle.com</p>
            <p>+54 11 2345 6789</p>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center opacity-50 hover:opacity-100 transition">
        <Link href="/admin" className="text-xs">
          Admin
        </Link>
      </div>
      {/* Línea inferior */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Motorcicle. Todos los derechos reservados.
      </div>
    </footer>
  );
}
