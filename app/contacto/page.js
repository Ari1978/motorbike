
import { BotonVolver } from "../Components/BotonVolver";
import ContactForm from "../Components/ContactForm";

export const metadata = {
  title: "Motorcicle - Contacto",
  description: "Formulario para contactarnos en Motorcicle, venta de motocicletas.",
  keywords: ["Contacto", "Motorcicle", "Formulario", "Motocicletas", "Next.js"],
};

export default function ContactPage() {
  return (
   <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-blue-600 inline-block pb-2">
          Contactanos
        </h1>
        <p className="mt-4">
          ¿Tenés preguntas o querés saber más sobre nuestras motos? Completá el formulario y nos pondremos en contacto con vos.
        </p>
      </div>

      <ContactForm />
      <div className="flex justify-center mt-6">
        <BotonVolver />
      </div>
    </section>
  );
}
