import type { CartItem } from "@hungry-hippo/types";

interface CartFooterProps {
  cartItems: CartItem[];
}

export default function CartFooter({ cartItems }: CartFooterProps) {
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const formattedPrice = totalPrice.toLocaleString("is-IS");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-2xl z-20">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalCount}
            </div>
            <span className="font-bold text-lg">{formattedPrice} kr.</span>
          </div>
          <span className="text-gray-500 text-xs">Total (incl. vat)</span>
        </div>
      </div>
    </div>
  );
}
