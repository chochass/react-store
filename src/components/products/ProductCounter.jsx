const ProductCounter = (props) => {
  const { visible, total } = props;
  return (
    <p className="text-sm text-gray-500">
      Showing <span className="font-medium text-gray-900">{visible}</span> of{" "}
      <span className="font-medium text-gray-900">{total}</span> products
    </p>
  );
};

export default ProductCounter;
