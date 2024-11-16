import ProductGrid from "@/components/products/ProductGrid";
import { ProductResponse } from "@/types/product";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function getProducts(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/producst/${slug}?page=1&size=50`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export default async function ProductsPage({ params }: Props) {
  const { slug } = await params;
  const productsData: ProductResponse = await getProducts(slug);

  const products = productsData?.items?.map((item) => ({
    id: item?.id?.toString(),
    title: item?.title,
    subtitle: item?.short_description,
    price: 0,
    image: item?.media?.file_path,
  }));

  return (
    <div className="lg:col-span-3">
      <ProductGrid products={products} />
    </div>
  );
}
