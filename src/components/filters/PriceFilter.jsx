const PriceFilter = (props) => {
  const { priceRange, currentMin, currentMax, onChange } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const values = [
      data.get("min") ? Number(data.get("min")) : priceRange.min,
      data.get("max") ? Number(data.get("max")) : priceRange.max,
    ].sort((a, b) => a - b);

    onChange(values[0], values[1]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-sm font-semibold text-gray-900">
          Price (€)
        </legend>
        <div className="mt-2 flex items-center gap-2">
          <input
            key={`min-${currentMin}`}
            name="min"
            type="number"
            placeholder="Min"
            className="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-gray-500 focus:outline-none"
          />
          <span className="text-gray-400">-</span>
          <input
            key={`max-${currentMax}`}
            name="max"
            type="number"
            placeholder="Max"
            className="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 cursor-pointer rounded bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
        >
          Apply
        </button>
      </fieldset>
    </form>
  );
};

export default PriceFilter;
