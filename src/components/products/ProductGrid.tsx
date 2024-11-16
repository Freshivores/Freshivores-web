"use client";

import { usePathname } from "next/navigation";
import { Product } from "@/types/product";
import ProductCard from "./productCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            href={`${pathname}/${product?.id}`}
          />
        );
      })}
    </div>
  );
}
