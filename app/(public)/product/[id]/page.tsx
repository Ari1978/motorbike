import { getProductById } from "@/services/firestore";
import ProductDetail from "@/app/Components/ProductDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return (
      <p className="text-center text-red-400 mt-10">
        Producto no encontrado
      </p>
    );
  }

  return <ProductDetail product={product} />;
}