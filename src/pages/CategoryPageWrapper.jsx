import { useParams } from "react-router-dom";
import CategoryPage from "./CategoryPage";

const CategoryPageWrapper = () => {
  const { categorySlug } = useParams();
  return <CategoryPage key={categorySlug} />;
};

export default CategoryPageWrapper;
