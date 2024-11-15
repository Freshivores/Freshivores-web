export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export interface FeaturedProduct extends Product {
  description: string;
  category: string;
}

export interface RelatedProduct {
  id: string;
  title: string;
  price: number;
  image: string;
}

export interface ProductResponse {
  items: Product[];
  total: number;
  page: number;
  size: number;
  pages: number;
} 