import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    title: "Almond Added Atta",
    description: "Milled To Order Customizable Atta",
    price: 665,
    image: "/images/products/almond-atta.jpg",
    category: "flour",
  },
  {
    id: "2",
    title: "Red Chilli Powder (Mix & Make)",
    description: "Milled To Order Customizable Powder",
    price: 900,
    image: "/images/products/red-chilli.jpg",
    category: "spices",
  },
  {
    id: "3",
    title: "Coconut Delight Cookies",
    description: "Baked Bonjour from Freshivores!",
    price: 81,
    image: "/images/products/coconut-cookies.jpg",
    category: "baked",
  },
  {
    id: "4",
    title: "Nutriragi Cookies",
    description: "Baked Bonjour from Freshivores!",
    price: 63,
    image: "/images/products/nutriragi-cookies.jpg",
    category: "baked",
  },
  {
    id: "5",
    title: "Wood Pressed Groundnut Oil",
    description: "Cold Pressed Pure Groundnut Oil",
    price: 399,
    image: "/images/products/groundnut-oil.jpg",
    category: "oil",
  },
  {
    id: "6",
    title: "Organic Foxtail Millet",
    description: "Ancient Super Grain Rich in Nutrients",
    price: 125,
    image: "/images/products/foxtail-millet.jpg",
    category: "millets",
  },
  {
    id: "7",
    title: "Sambar Powder",
    description: "Traditional South Indian Spice Blend",
    price: 450,
    image: "/images/products/sambar-powder.jpg",
    category: "masala",
  },
  {
    id: "8",
    title: "Premium Cashews",
    description: "Grade W320 Whole Cashew Nuts",
    price: 899,
    image: "/images/products/cashews.jpg",
    category: "dry-fruits",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-5 md:px-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Favorite Products</h2>
        <p className="text-gray-600">
          Explore products which is favorite of many like you!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="https://www.freshivores.com/uploads/media/5-coconut-11zon666299cc46e75.webp"
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="font-semibold mb-1 line-clamp-1">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2 font-light line-clamp-1">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-semibold">₹{product.price}</span>
                <span className="text-sm text-gray-500">/KG</span>
              </div>
              <Link
                href={`/products/${product.id}`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
