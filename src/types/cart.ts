export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  variant: string;
  weight: string;
}

export interface CartSummaryProps {
  subtotal: number;
  deliveryCharge: number;
  total: number;
  address: string;
}

export interface CartItemProps extends CartItem {
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
} 