const ProductPrice = (props) => {
  const { product, size = "sm" } = props;
  const sizeStyles = {
    sm: { price: "text-sm", original: "text-xs", gap: "gap-2" },
    lg: { price: "text-2xl", original: "text-lg", gap: "gap-3" },
  };

  if (product.discountedPrice) {
    return (
      <div className={`flex items-baseline ${sizeStyles[size].gap}`}>
        <span className={`${sizeStyles[size].price} font-bold text-red-600`}>
          {product.discountedPrice}€
        </span>
        <span
          className={`${sizeStyles[size].original} text-gray-400 line-through`}
        >
          {product.price}€
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-baseline ${sizeStyles[size].gap}`}>
      <span className={`${sizeStyles[size].price} font-bold text-gray-900`}>
        {product.price}€
      </span>
    </div>
  );
};

export default ProductPrice;
