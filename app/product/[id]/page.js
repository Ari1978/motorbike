// app/product/[id]/page.js

import { getProductById } from "../../firebase/getProducts";
import ProductDetail from "../../Components/ProductDetail";

export default async function Page({ params }) {
  // El 'id' ya está resuelto por Next.js cuando usas rutas dinámicas
  const { id } = params; // Aquí accedemos directamente al 'id' desde 'params'

  // Llamamos a la función para obtener el producto desde Firebase
  const product = await getProductById(id);

  // Si no se encuentra el producto, mostramos un mensaje de error
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Si el producto existe, pasamos los datos a 'ProductDetail'
  return <ProductDetail product={product} />;
}
