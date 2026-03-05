import { createContext, useContext } from "react";

const CartContext = createContext(null);

export default CartContext;

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
