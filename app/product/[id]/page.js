import { getProductById } from "../../firebase/getProducts";
import ProductDetail from "../../Components/ProductDetail";

export default async function Page({ params }) {
  // Asegurarnos de que 'params' esté resuelto antes de acceder a él
  const { id } = await params;  // Aquí esperamos que params se resuelva

  // Llamamos a la función para obtener el producto desde Firebase
  const product = await getProductById(id);

  // Si no se encuentra el producto, mostramos un mensaje de error
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Si el producto existe, pasamos los datos a 'ProductDetail'
  return <ProductDetail product={product} />;
}
