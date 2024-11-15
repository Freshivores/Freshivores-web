import Container from "@/components/layout/container";
import DeliveryFeatures from "@/components/product/DeliveryFeatures";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";
import { ProductDetails } from "@/types/product";

async function getProduct(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

interface Props {
  params: Promise<{
    slug: string;
    product: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { product } = await params;
  const productData: ProductDetails = await getProduct(product);

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <ProductDetail product={productData} />
      <DeliveryFeatures />
      <RelatedProducts />
    </Container>
  );
}
