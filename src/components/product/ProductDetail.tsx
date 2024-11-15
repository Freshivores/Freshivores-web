import Image from "next/image";
import Link from "next/link";
import { ProductDetails } from "@/types/product";
import FrequentlyBoughtTogether from "./FrequentlyBoughtTogether";

interface ProductDetailProps {
  product: ProductDetails;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-gray-900">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={`${product?.media?.file_path}`}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product?.short_description}</p>

          <div className="flex flex-row gap-4 items-center">
            <div className="flex gap-2 mb-8 items-center">
              <span className="text-2xl font-semibold">₹{product?.product_variants[0]?.sale_price}</span>
              <span className="text-gray-600">/ KG</span>
            </div>

            {/* Product Options */}
            <div className="flex gap-4 mb-8">
              <div className="w-40">
                {/* <label className="block text-sm text-gray-600 mb-2">Type</label> */}
                <select className="w-full p-2 border rounded-md">
                  <option>POWDER</option>
                </select>
              </div>
              <div className="w-40">
                {/* <label className="block text-sm text-gray-600 mb-2">
                  Weight
                </label> */}
                <select className="w-full p-2 border rounded-md">
                  <option>1 KG</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="w-24">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="px-6 py-2 bg-white border-2 border-gray-900 rounded-md flex items-center gap-2 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Add to cart
            </button>
            <button className="px-6 py-2 bg-orange-400 text-white rounded-md flex items-center gap-2 hover:bg-orange-600">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Mill as you wish
            </button>
            {/* <button className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Bulk Order
            </button> */}
          </div>

          {/* Frequently Bought Together */}
          <FrequentlyBoughtTogether />
        </div>
      </div>
    </div>
  );
}
