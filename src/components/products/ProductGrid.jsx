import ProductCard from "./ProductCard";

const ProductGrid = (props) => {
  const { products } = props;
  return (
    <div className="grid min-h-[75vh] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.length === 0 ? (
        <p className="col-span-full place-self-center py-12 text-gray-500">
          No products match your filters.
        </p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
