import { useState } from "react";

const PriceFilter = ({ currentMin, currentMax, onChange }) => {
  const [minInput, setMinInput] = useState(() =>
    currentMin == null ? "" : String(currentMin),
  );
  const [maxInput, setMaxInput] = useState(() =>
    currentMax == null ? "" : String(currentMax),
  );

  const minVal = minInput.trim() === "" ? null : Number(minInput);
  const maxVal = maxInput.trim() === "" ? null : Number(maxInput);
  const isInvalid = minVal != null && maxVal != null && minVal > maxVal;

  const handleApply = () => onChange(minVal, maxVal);

  return (
    <fieldset>
      <legend className="text-sm font-semibold text-gray-900">Price (€)</legend>
      <div className="mt-2 flex items-center gap-2">
        <input
          type="number"
          value={minInput}
          onChange={(e) => setMinInput(e.target.value)}
          placeholder="Min"
          className="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-gray-500 focus:outline-none"
        />
        <span className="text-gray-400">-</span>
        <input
          type="number"
          value={maxInput}
          onChange={(e) => setMaxInput(e.target.value)}
          placeholder="Max"
          className="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-gray-500 focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={handleApply}
        disabled={isInvalid}
        className="mt-2 cursor-pointer rounded bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Apply
      </button>
    </fieldset>
  );
};

export default PriceFilter;
