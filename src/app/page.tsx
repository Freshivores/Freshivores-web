import Categories from "@/components/home/Categories";
import Container from "@/components/layout/container";
import ShopCategories from '@/components/home/ShopCategories';
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <Container>
      <main>
        <ShopCategories />
        <Categories />
        <FeaturedProducts />
      </main>
    </Container>
  );
}
