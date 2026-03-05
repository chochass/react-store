import toast from "react-hot-toast";
import StarRating from "../ui/StarRating";
import ProductPrice from "../ui/ProductPrice";
import AddToCartButton from "../ui/AddToCartButton";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";

const ProductCard = (props) => {
  const { product } = props;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`"${product.name}" added to cart!`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <Link to={`/${product.category}/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <h3 className="p-4 pb-0 text-sm font-semibold text-gray-900">
          {product.name}
        </h3>
      </Link>

      <div className="flex flex-1 flex-col p-4 pt-0">
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto pt-2">
          <StarRating rating={product.rating} />
        </div>

        <div className="mt-2">
          <ProductPrice product={product} size="sm" />
        </div>

        <AddToCartButton
          onClick={handleAddToCart}
          size="sm"
          className="mt-3 w-full"
        />
      </div>
    </article>
  );
};

export default ProductCard;
