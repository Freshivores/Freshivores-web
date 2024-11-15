"use client";

import { useState } from "react";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { CartItem as CartItemType } from "@/types/cart";

const dummyCartItems: CartItemType[] = [
  {
    id: "1",
    title: "Garam Masala",
    price: 165,
    quantity: 1,
    image:
      "https://www.freshivores.com/uploads/media/5-coconut-11zon666299cc46e75.webp",
    variant: "GLASS BOTTLE",
    weight: "100 GM",
  },
  {
    id: "2",
    title: "Jackfruit Dried",
    price: 300,
    quantity: 1,
    image:
      "https://www.freshivores.com/uploads/media/5-coconut-11zon666299cc46e75.webp",
    variant: "WHOLE",
    weight: "250 GM",
  },
];

export default function CartPageContent() {
  const [cartItems, setCartItems] = useState(dummyCartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryCharge = 100;
  const total = subtotal + deliveryCharge;

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemoveItem}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div>
          <CartSummary
            subtotal={subtotal}
            deliveryCharge={deliveryCharge}
            total={total}
            address="Hafis Muhammed, 3rd Floor, HSR Layout, A-1, 18th A Main Road, Cocktail, No: 43, Ground Floor, A-1, 18th A Main Rd, near Narayana Hospital, Sector 3, HSR Layout, Bengaluru, Karnataka 560102"
          />
        </div>
      </div>
    </div>
  );
}
