import { HiOutlineX, HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { useCart } from "../../context/cart-context";

const CartDrawer = (props) => {
  const { open, onClose } = props;
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();

  return (
    open && (
      <div className="fixed inset-0 z-50 flex">
        <div className="fixed inset-0 bg-black/40" onClick={onClose} />

        <aside className="relative ml-auto flex h-full w-80 flex-col bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-bold text-gray-900">Cart</h2>
            <button
              onClick={onClose}
              className="cursor-pointer text-gray-500 hover:text-gray-900"
              aria-label="Close cart"
            >
              <HiOutlineX className="h-5 w-5" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-gray-100 overflow-y-auto px-6">
                {cart.map(({ product, quantity }) => {
                  const price = product.discountedPrice ?? product.price;
                  return (
                    <li key={product.id} className="flex gap-4 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 shrink-0 rounded bg-gray-100 object-cover"
                      />

                      <div className="flex flex-1 flex-col">
                        <p className="text-sm font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          {price}€
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded border border-gray-300">
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              className="cursor-pointer px-1.5 py-0.5 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <HiMinus className="h-3 w-3" />
                            </button>
                            <span className="min-w-6 text-center text-xs font-medium text-gray-900">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              className="cursor-pointer px-1.5 py-0.5 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <HiPlus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="cursor-pointer text-gray-400 hover:text-red-500"
                            aria-label={`Remove ${product.name}`}
                          >
                            <HiOutlineTrash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {cartTotal}€
                  </span>
                </div>
                <button
                  onClick={clearCart}
                  className="mt-3 w-full cursor-pointer text-center text-xs text-gray-500 underline hover:text-gray-900"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    )
  );
};

export default CartDrawer;
