export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export interface ProductResponse {
  items: {
    id: number;
    title: string;
    show_in_website: boolean;
    short_description: string;
    media: {
      file_path: string;
    };
  }[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface FeaturedProduct extends Product {
  description: string;
  category: string;
} 