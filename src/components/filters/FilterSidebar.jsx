import { HiOutlineX } from "react-icons/hi";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

const FilterSidebar = ({
  availableColors,
  priceRange,
  filters,
  onColorChange,
  onPriceChange,
  onReset,
  mobileOpen,
  onMobileClose,
}) => {
  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="cursor-pointer text-xs text-gray-500 underline hover:text-gray-900"
          >
            Reset all
          </button>
          <button
            onClick={onMobileClose}
            className="text-gray-500 hover:text-gray-900 md:hidden"
            aria-label="Close filters"
          >
            <HiOutlineX className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ColorFilter
        availableColors={availableColors}
        selectedColors={filters.colors}
        onChange={onColorChange}
      />

      <PriceFilter
        priceRange={priceRange}
        currentMin={filters.minPrice}
        currentMax={filters.maxPrice}
        onChange={onPriceChange}
      />
    </div>
  );

  return (
    <>
      <aside className="hidden w-56 shrink-0 md:block">
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={onMobileClose}
          />
          <aside className="relative ml-auto h-full w-72 overflow-y-auto bg-white p-6 shadow-xl">
            {content}
          </aside>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
