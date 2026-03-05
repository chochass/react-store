const ProductPrice = (props) => {
  const { product, size = "sm" } = props;
  const sizeStyles = {
    sm: { price: "text-sm", original: "text-xs", gap: "gap-2" },
    lg: { price: "text-2xl", original: "text-lg", gap: "gap-3" },
  };

  return (
    <div className={`flex items-baseline ${sizeStyles[size].gap}`}>
      {product.discountedPrice ? (
        <>
          <span className={`${sizeStyles[size].price} text-red-600`}>
            {product.discountedPrice}€
          </span>
          <span
            className={`${sizeStyles[size].original} text-gray-400 line-through`}
          >
            {product.price}€
          </span>
        </>
      ) : (
        <span className={`${sizeStyles[size].price} text-gray-900`}>
          {product.price}€
        </span>
      )}
    </div>
  );
};

export default ProductPrice;
