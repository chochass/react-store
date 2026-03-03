import StarRating from "../ui/StarRating";

const ProductCard = (props) => {
  const { product } = props;
  const hasDiscount = product.discountedPrice !== null;

  const handleAddToCart = () => {
    alert(`"${product.name}" added to cart!`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm font-bold text-red-600">
                {product.discountedPrice.toFixed(2)}€
              </span>
              <span className="text-xs text-gray-400 line-through">
                {product.price.toFixed(2)}€
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-gray-900">
              {product.price.toFixed(2)}€
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-auto pt-3 w-full cursor-pointer rounded bg-gray-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
