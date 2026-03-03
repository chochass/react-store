import ProductCard from "./ProductCard";

const ProductGrid = (props) => {
  const { products } = props;
  if (products.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        No products match your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
