"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`${pathname}/${product.id}`}
          className="bg-white cursor-pointer"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={`https://www.freshivores.com/${product?.image}`}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2 px-0">
            <h3 className="text-lg font-semibold line-clamp-1">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
