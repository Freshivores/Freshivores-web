import Link from "next/link";
import Image from "next/image";

interface HeaderCategory {
  title: string;
  slug: string;
  priority: number;
  menu_priority: number;
  media2: {
    file_path: string;
    thumb_file_path: string;
  };
}

async function getHeaderCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/header_category`,
      {
        headers: {
          accept: "application/json",
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      console.error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`
      );
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function CategorySidebar() {
  const categories: HeaderCategory[] = await getHeaderCategories();

  return (
    <div className="w-full">
      <div className="mb-8">
        <label htmlFor="sort" className="block text-sm text-gray-600 mb-2">
          Sort by
        </label>
        <select
          id="sort"
          className="w-full p-2 border rounded-md"
          defaultValue="most-relevant"
        >
          <option value="most-relevant">Most Relevant</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      <nav>
        <ul className="space-y-4">
          {categories.map((category) => {
            console.log(JSON.stringify(category));
            if(!category?.media2?.thumb_file_path) return
            return (
              <li key={category.slug}>
                <Link
                  href={`/products/${category.slug}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <Image
                    src={`${category?.media2?.thumb_file_path}`}
                    alt={category.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{category.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
