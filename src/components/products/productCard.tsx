import Link from "next/link";
import { Product } from "@/types/product";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
//   href: string;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white cursor-pointer group"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
        <ProductImage url={product.image} alt={product.title} />
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
  );
}
