const SIZE_STYLES = {
  sm: "px-4 py-2 text-xs",
  lg: "px-6 py-3 text-sm",
};

const AddToCartButton = (props) => {
  const { onClick, size = "sm", className = "" } = props;
  const sizeStyles = SIZE_STYLES[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded bg-gray-900 font-medium text-white transition-colors hover:bg-gray-700 ${sizeStyles} ${className}`.trim()}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
