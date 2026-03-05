import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import StarRating from "../components/ui/StarRating";
import ProductPrice from "../components/ui/ProductPrice";
import QuantitySelector from "../components/ui/QuantitySelector";
import AddToCartButton from "../components/ui/AddToCartButton";
import { useCart } from "../context/cart-context";
import { products, categories } from "../data/catalog";

const ProductPage = () => {
  const { categorySlug, productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((product) => product.id === Number(productId));
  const category = categories.find(
    (category) => category.slug === categorySlug,
  );

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-2 text-gray-500">
          The product you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          to={`/${categorySlug}`}
          className="mt-4 inline-block text-sm font-medium text-gray-900 underline hover:text-gray-600"
        >
          Back to {category?.name}
        </Link>
      </main>
    );
  }

  const largeImage = product.image.replace("400/400", "800/800");

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}x "${product.name}" added to cart!`);
  };

  return (
    <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to={`/${categorySlug}`}
        className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        <HiArrowLeft className="h-4 w-4" />
        Back to {category?.name}
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="max-h-112 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={largeImage}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-4">
            <ProductPrice product={product} size="lg" />
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span
              className="inline-block h-4 w-4 rounded-full border border-gray-300"
              style={{ backgroundColor: product.color }}
            />
            <span className="text-sm capitalize text-gray-600">
              {product.color}
            </span>
          </div>

          <div className="mt-8 self-start">
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              size="lg"
            />
          </div>

          <AddToCartButton
            onClick={handleAddToCart}
            size="lg"
            className="mt-4 w-full sm:w-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
