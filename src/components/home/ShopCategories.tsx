import { CategoryResponse } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

export default async function ShopCategories() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
  const categories: CategoryResponse = await data.json();

  const bgColors = [
    "bg-amber-50",
    "bg-orange-50",
    "bg-red-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-amber-50",
    "bg-orange-50",
    "bg-red-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-amber-50",
    "bg-orange-50",
    "bg-red-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-amber-50",
  ];

  return (
    <section className="py-4 px-5 md:px-0">
      {/* <div className="mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-1">Shop By Category</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore our range of freshly &quot;made to order&quot; products
        </p>
      </div> */}

      <div className="grid grid-cols-3 md:grid-cols-3 md:gap-6 gap-4 cursor-pointer">
        {categories?.map((category, index) => {
          if (index > 11) return null;
          return (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className={`rounded-xl overflow-hidden ${bgColors[index]}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-40 h-28 relative rounded-lg overflow-hidden">
                  <Image
                    src={`${category.media.file_path}`}
                    alt={category.title}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="mt-0 md:mt-0 md:ml-4 flex-grow flex flex-col items-center md:items-start justify-center md:w-4/5 w-full">
                  <h3 className="text-base md:text-2xl font-semibold text-gray-800 md:mb-1 capitalize text-center md:text-left line-clamp-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-1 w-5/6">
                    {category.short_description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
