import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { categories, defaultCategorySlug } from "../../data/catalog";
import { useCart } from "../../context/cart-context";
import CartDrawer from "../cart/CartDrawer";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-18 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <NavLink
          to={`/${defaultCategorySlug}`}
          className="flex h-full shrink-0 items-center py-1"
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Bags and Shoes"
            className="h-full w-auto object-contain"
          />
        </NavLink>

        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          {categories.map((cat) => (
            <NavLink
              key={cat.slug}
              to={`/${cat.slug}`}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-gray-900 border-b-2 border-gray-900 pb-0.5"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {cat.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="relative cursor-pointer rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {categories.map((cat) => (
            <NavLink
              key={cat.slug}
              to={`/${cat.slug}`}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium uppercase tracking-wide ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`
              }
            >
              {cat.name}
            </NavLink>
          ))}
        </nav>
      )}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Navbar;
