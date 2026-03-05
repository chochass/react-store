import { useReducer, useEffect, useMemo } from "react";
import { CartContext } from "./cart-context";

const STORAGE_KEY = "ecom-cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "addItem": {
      const { product, quantity = 1 } = action;
      const index = state.findIndex((item) => item.product.id === product.id);

      if (index >= 0) {
        return state.map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...state, { product, quantity }];
    }

    case "removeItem":
      return state.filter((item) => item.product.id !== action.productId);

    case "updateQty":
      if (action.quantity <= 0) {
        return state.filter((item) => item.product.id !== action.productId);
      }
      return state.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item,
      );

    case "clear":
      return [];

    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: "addItem", product, quantity });

  const removeFromCart = (productId) =>
    dispatch({ type: "removeItem", productId });

  const updateQuantity = (productId, quantity) =>
    dispatch({ type: "updateQty", productId, quantity });

  const clearCart = () => dispatch({ type: "clear" });

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const price = item.product.discountedPrice ?? item.product.price;
        return sum + price * item.quantity;
      }, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
    }),
    [cart, cartCount, cartTotal],
  );

  return <CartContext value={value}>{children}</CartContext>;
}
