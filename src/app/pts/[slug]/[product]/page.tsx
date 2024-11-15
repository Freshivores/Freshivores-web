import Container from "@/components/layout/container";
import DeliveryFeatures from "@/components/product/DeliveryFeatures";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";
import { Product } from "@/types/product";

const dummyProduct: Product = {
  id: "2",
  title: "Red Chilli Powder (Mix & Make)",
  subtitle: "Milled To Order Customizable Powder",
  price: 900,
  image: "https://www.freshivores.com/uploads/media/WEB%20PSD%20chilli%201659d721e7be01.webp",
};

export default function ProductPage() {
  return (
    <Container>
      <ProductDetail product={dummyProduct} />
      <DeliveryFeatures />
      <RelatedProducts />
    </Container>
  );
}
