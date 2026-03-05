const AddToCartButton = (props) => {
  const { onClick, size = "sm", className = "" } = props;
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    lg: "px-6 py-3 text-sm",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded bg-gray-900 font-medium text-white transition-colors hover:bg-gray-700 ${sizeStyles[size]} ${className}`.trim()}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
