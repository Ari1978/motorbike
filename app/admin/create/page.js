import { CreateForm } from "../components/CreateForm";

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Crear Producto</h1>
      <p className="text-gray-600 mb-6 text-center">
        Aquí puedes crear un nuevo producto completando el siguiente formulario con la información correspondiente.
      </p>
      <CreateForm />
    </div>
  );
}