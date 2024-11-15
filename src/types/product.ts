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

export interface ApiProduct {
  id: number;
  title: string;
  show_in_website: boolean;
  short_description: string;
  media: {
    file_path: string;
  };
}

export interface ProductResponse {
  items: ApiProduct[];
  total: number;
  page: number;
  size: number;
  pages: number;
} 


export interface ProductVariant {
  id: number;
  sku_code: string;
  primary_variant_id: number;
  mrp: number;
  sale_price: number;
  is_default: boolean;
  show_in_website: boolean;
  status: boolean;
  quantity: number;
  is_primary_product: boolean;
  item_variants: {
    name: string;
    milling_variants: Array<{
      id: number;
      name: string;
    }>;
  };
  unit_types_prod: {
    name: string;
    short_name: string;
  };
}

export interface ProductMedia {
  medias: {
    file_path: string;
  };
}

export interface ProductDetails {
  title: string;
  short_description: string;
  description: string;
  additional_info: string;
  product_type: string;
  is_loose_packing: boolean;
  is_millable: boolean;
  product_variants: ProductVariant[];
  media: {
    file_path: string;
  };
  meta_keywords: string;
  search_keyword: string;
  product_media: ProductMedia[];
}
