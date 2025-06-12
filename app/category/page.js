import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Bienvenido a Productos</h1>
      <ul>
        <li><Link href="/products/all">Todos</Link></li>
        <li><Link href="/products/naked">Naked</Link></li>
        <li><Link href="/products/enduro">Enduro</Link></li>
        <li><Link href="/products/scooters">Scooters</Link></li>
        
      </ul>
    </div>
  );
}


