import { HiMinus, HiPlus } from "react-icons/hi";

const SIZES = {
  sm: { icon: "h-3 w-3", button: "px-1.5 py-0.5", value: "min-w-6 text-xs" },
  lg: { icon: "h-4 w-4", button: "px-3 py-2", value: "min-w-10 text-sm" },
};

const QuantitySelector = (props) => {
  const { value, onChange, size = "lg" } = props;
  const sizeStyles = SIZES[size];

  return (
    <div className="flex items-center rounded border border-gray-300">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className={`cursor-pointer ${sizeStyles.button} text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-40`}
        disabled={value <= 1}
        aria-label="Decrease quantity"
      >
        <HiMinus className={sizeStyles.icon} />
      </button>
      <span
        className={`${sizeStyles.value} text-center font-medium text-gray-900`}
      >
        {value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className={`cursor-pointer ${sizeStyles.button} text-gray-600 transition-colors hover:bg-gray-100`}
        aria-label="Increase quantity"
      >
        <HiPlus className={sizeStyles.icon} />
      </button>
    </div>
  );
};

export default QuantitySelector;
