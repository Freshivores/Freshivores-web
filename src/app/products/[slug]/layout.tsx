import Container from "@/components/layout/container";
import ProductsHeader from "@/components/products/header";
import CategorySidebar from "@/components/products/CategorySidebar";

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <main className="py-4 w-full">
        <ProductsHeader title="Products" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 w-full">
          <aside className="lg:col-span-1">
            <CategorySidebar />
          </aside>
          <div className="lg:col-span-3 w-full">
            {children}
          </div>
        </div>
      </main>
    </Container>
  );
}
