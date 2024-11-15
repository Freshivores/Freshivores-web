import Container from "@/components/layout/container";
import ProductsHeader from "@/components/products/header";
import CategorySidebar from "@/components/products/CategorySidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { Product, ProductResponse } from "@/types/product";

interface Props {
  params: {
    slug: string;
  };
}

async function getProducts(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/producst/${slug}?page=1&size=50`,
      {
        headers: {
          accept: "application/json",
        },
        next: {
          revalidate: 60, // Revalidate every minute
        },
      }
    );

    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
      return {
        items: [],
        total: 0,
        page: 1,
        size: 50,
        pages: 0,
      };
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      items: [],
      total: 0,
      page: 1,
      size: 50,
      pages: 0,
    };
  }
}

export default async function ProductsPage({ params }: Props) {
  const productsData: ProductResponse = await getProducts(params.slug);

  const products = productsData.items.map((item: Product) => ({
    id: item.id.toString(),
    title: item.title,
    subtitle: item.subtitle,
    price: 0,
    image: item.image,
  }));

  return (
    <Container>
      <main className="py-4">
        <ProductsHeader title="Products" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
          <aside className="lg:col-span-1">
            <CategorySidebar />
          </aside>
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </main>
    </Container>
  );
}
