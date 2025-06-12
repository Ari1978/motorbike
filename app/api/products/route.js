import { NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";  // Asegúrate de que estas funciones estén importadas correctamente
import { db } from "../../firebase/getProducts";  // Asegúrate de que la referencia a la base de datos esté bien configurada

export async function GET(request) {
  return NextResponse.json(products);  // Esto es solo un ejemplo de respuesta, debes obtener los productos desde Firebase si es necesario
}

export async function POST(request) {
  const body = await request.json();  // Obtén el cuerpo de la solicitud

  const {
    name,
    slug,
    marca,
    imageUrl,
    description,
    price,
    stock,
    category,
  } = body;

  
  if (!name || !slug || !description) {
    return NextResponse.json(
      {
        error:
          "Por favor, completa todos los campos obligatorios: nombre, slug y descripción.",
      },
      { status: 400 }
    );
  }

  // Validación de precio y stock
  if (parseFloat(price) <= 0 || parseInt(stock) <= 0) {
    return NextResponse.json(
      { error: "El precio y la cantidad en stock deben ser mayores a 0." },
      { status: 400 }
    );
  }

  // Validación de URL de imagen
  if (imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(imageUrl)) {
    return NextResponse.json(
      {
        error: "Por favor, proporciona una URL de imagen válida.",
      },
      { status: 400 }
    );
  }

  // Validación de marca y categoría
  if (!marca || !category) {
    return NextResponse.json(
      {
        error: "Marca y categoría son campos requeridos.",
      },
      { status: 400 }
    );
  }

  // Crear un objeto de producto con los datos
  const product = {
    name,
    slug,
    marca,
    imageUrl: imageUrl || "",  
    description,
    price: parseFloat(price),
    stock: parseInt(stock, 10),
    category,
  };

  try {
    // Crear una referencia al documento en Firestore
    const docRef = doc(db, "motorbike", slug);  

    // Guardar el producto en Firestore
    await setDoc(docRef, product);

    return NextResponse.json(
      { message: "Producto creado exitosamente." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return NextResponse.json(
      { error: "Error al guardar el producto. Inténtelo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
