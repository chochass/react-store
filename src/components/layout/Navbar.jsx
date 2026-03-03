import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { categories } from "../../data/catalog";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl items-center px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          ECOM
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

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 md:hidden"
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
    </header>
  );
};

export default Navbar;
