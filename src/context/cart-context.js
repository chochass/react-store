import { createContext, useContext } from "react";

const CartContext = createContext(null);

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartContext, useCart };
