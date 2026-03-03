import { useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineAdjustments } from "react-icons/hi";
import { categories } from "../data/catalog";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/products/ProductGrid";
import ProductCounter from "../components/products/ProductCounter";
import SortDropdown from "../components/ui/SortDropdown";
import FilterSidebar from "../components/filters/FilterSidebar";

const PRODUCTS_PER_PAGE = 20;

const INITIAL_FILTERS = { colors: [], minPrice: 0, maxPrice: Infinity };

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = categories.find((cat) => cat.slug === categorySlug);

  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { filteredProducts, totalInCategory, availableColors, priceRange } =
    useProducts(categorySlug, filters, sortBy);

  if (!category) {
    return (
      <main className="mx-auto max-w-screen-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
        <p className="mt-2 text-gray-500">
          The category &ldquo;{categorySlug}&rdquo; does not exist.
        </p>
      </main>
    );
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleColorChange = (colors) => {
    setFilters((prev) => ({ ...prev, colors }));
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    setFilters((prev) => ({ ...prev, minPrice, maxPrice }));
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  return (
    <main className="mx-auto max-w-screen-2xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
        <p className="mt-1 text-gray-600">{category.description}</p>
        <p className="mt-1 text-sm text-gray-400">
          {totalInCategory} products in this category
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="inline-flex cursor-pointer items-center gap-1 rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 md:hidden"
          >
            <HiOutlineAdjustments className="h-4 w-4" />
            Filters
          </button>
          <ProductCounter
            visible={visibleProducts.length}
            total={filteredProducts.length}
          />
        </div>
        <SortDropdown value={sortBy} onChange={handleSortChange} />
      </div>

      <div className="flex flex-1 gap-8">
        <FilterSidebar
          availableColors={availableColors}
          priceRange={priceRange}
          filters={filters}
          onColorChange={handleColorChange}
          onPriceChange={handlePriceChange}
          onReset={handleReset}
          mobileOpen={mobileFilterOpen}
          onMobileClose={() => setMobileFilterOpen(false)}
        />

        <div className="flex-1">
          <ProductGrid products={visibleProducts} />

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE)
                }
                className="cursor-pointer rounded border border-gray-300 px-8 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
