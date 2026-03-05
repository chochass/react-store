const SortDropdown = (props) => {
  const { value, onChange } = props;
  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "name-asc", label: "Alphabetical (A-Z)" },
    { value: "name-desc", label: "Alphabetical (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
  ];
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-gray-500 focus:outline-none"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
