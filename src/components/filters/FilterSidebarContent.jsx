import { HiOutlineX } from "react-icons/hi";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

const FilterSidebarContent = (props) => {
  const {
    availableColors,
    filters,
    onColorChange,
    onPriceChange,
    onReset,
    onMobileClose,
  } = props;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="cursor-pointer text-sm text-gray-500 underline hover:text-gray-900"
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
        key={`${filters.minPrice}-${filters.maxPrice}`}
        currentMin={filters.minPrice}
        currentMax={filters.maxPrice}
        onChange={onPriceChange}
      />
    </div>
  );
};

export default FilterSidebarContent;
