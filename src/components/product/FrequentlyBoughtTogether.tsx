import Image from "next/image";
import Link from "next/link";

interface RelatedProduct {
  id: string;
  title: string;
  price: number;
  image: string;
}

const dummyRelatedProducts: RelatedProduct[] = [
  {
    id: "1",
    title: "Red Chilli ( Kashmiri Original )",
    price: 325,
    image:
      "https://www.freshivores.com/uploads/media/WEB%20PSD%20chilli%201659d721e7be01.webp",
  },
  {
    id: "2",
    title: "Red Chilli ( Guntur Long Medium Spicy )",
    price: 137.5,
    image:
      "https://www.freshivores.com/uploads/media/WEB%20PSD%20chilli%201659d721e7be01.webp",
  },
  {
    id: "3",
    title: "Red Chilli ( Salem Ball )",
    price: 150,
    image:
      "https://www.freshivores.com/uploads/media/WEB%20PSD%20chilli%201659d721e7be01.webp",
  },
];

export default function FrequentlyBoughtTogether() {
  return (
    <div className="py-4">
      <h2 className="text-lg font-semibold mb-3">Frequently bought together</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyRelatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/pts/spices/${product.id}`}
            className="group"
          >
            <div className="relative aspect-[4/2] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2 line-clamp-1">
                {product.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
