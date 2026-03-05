const COLOR_SWATCHES = {
  black: "bg-black",
  brown: "bg-amber-800",
  tan: "bg-amber-600",
  red: "bg-red-500",
  navy: "bg-blue-900",
  beige: "bg-amber-100",
  grey: "bg-gray-400",
  white: "bg-white border border-gray-300",
};

const ColorFilter = (props) => {
  const { availableColors, selectedColors, onChange } = props;
  const toggle = (color) => {
    const next = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    onChange(next);
  };

  return (
    <fieldset>
      <legend className="text-base font-semibold text-gray-900">Color</legend>
      <div className="mt-3 space-y-3">
        {availableColors.map((color) => (
          <label key={color} className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggle(color)}
              className="h-4.5 w-4.5 rounded border-gray-300 accent-gray-900"
            />
            <span
              className={`inline-block h-5 w-5 rounded-full ${COLOR_SWATCHES[color] || "bg-gray-300"}`}
            />
            <span className="text-base capitalize text-gray-700">{color}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default ColorFilter;
