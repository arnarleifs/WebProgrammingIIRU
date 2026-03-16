import { products } from "@/data/products";
import ProductCard from "@/components/product-card";
import Cart from "@/components/cart";

export default function Home() {
  return (
    <main className="p-6 grid grid-cols-[1fr_300px] gap-6">
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Cart />
    </main>
  );
}
