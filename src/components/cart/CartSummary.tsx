import { CartSummaryProps } from "@/types/cart";

export default function CartSummary({
  subtotal,
  deliveryCharge,
  total,
  address,
}: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Delivery Address</h3>
        <p className="text-gray-600 text-sm">{address}</p>
        <button className="mt-2 text-green-600 text-sm font-medium">
          Change
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>
        <div className="flex justify-between font-semibold pt-3 border-t">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Proceed to Checkout
      </button>
    </div>
  );
}
