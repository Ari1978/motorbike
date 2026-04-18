
import ContactForm from "../../Components/ContactForm";
import Image from "next/image";


export const metadata = {
  title: "Motorcicle | Contacto",
  description:
    "Formulario de contacto de Motorcicle para consultas sobre motocicletas.",
  keywords: ["Contacto", "Motorcicle", "Formulario", "Motocicletas", "Next.js"],
};

export default function ContactPage() {
  return (
    <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white/5 shadow-xl backdrop-blur-md md:grid-cols-2">
      {/* LADO IZQUIERDO */}
      <div className="relative hidden md:flex flex-col justify-between p-8 overflow-hidden">
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0">
          <Image
            src="https://http2.mlstatic.com/D_NQ_NP_2X_625482-MLA80835276508_122024-F.webp"
            alt="Voge DS 650"
            fill
            className="object-cover"
          />
        </div>

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENIDO */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">Motorcicle</h2>
          <p className="mt-2 text-sm text-white/80">
            Libertad sobre dos ruedas.
          </p>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold leading-tight">Voge DS 650</h3>
          <p className="mt-3 text-sm text-white/80">
            Potencia, diseño y aventura en una sola moto.
          </p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <ContactForm />

      </div>
    </div>
  );
}
