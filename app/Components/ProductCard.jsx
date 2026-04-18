import Link from "next/link";
import "../globals.css";
import Image from "next/image";

export function ProductCard({ product }) {
  if (!product) return null;

  const { id, name, image, category, marca } = product;

  return (
    <div className="product-card">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="product-card-img"
      />
      <h2 className="product-card-title">{name}</h2>
      <p className="product-card-text category">
        <strong>Categoría:</strong> {category}
      </p>
      <p className="product-card-text marca">
        <strong>Marca:</strong> {marca}
      </p>
      <Link href={`/product/${id}`} className="product-card-link">
        Ver Detalles
      </Link>
    </div>
  );
}
