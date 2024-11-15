import Image from "next/image";
import { CartItemProps } from "@/types/cart";

export default function CartItem({
  id,
  title,
  price,
  quantity,
  image,
  variant,
  weight,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-4">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="flex gap-2 text-sm text-gray-600 mb-2">
          <span className="px-2 py-1 bg-gray-100 rounded">{variant}</span>
          <span className="px-2 py-1 bg-gray-100 rounded">{weight}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">₹{price}</span>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 hover:bg-gray-100"
                onClick={() => onQuantityChange(id, Math.max(0, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 py-1 border-x">{quantity}</span>
              <button
                className="px-3 py-1 hover:bg-gray-100"
                onClick={() => onQuantityChange(id, quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="text-gray-500 hover:text-gray-700 bg-gray-100 px-4 py-2 rounded-md self-center"
      >
        Remove
      </button>
    </div>
  );
}
