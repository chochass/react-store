import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoryPage from "./pages/CategoryPage";
import { categories } from "./data/catalog";

function CategoryPageWrapper() {
  const { categorySlug } = useParams();
  return <CategoryPage key={categorySlug} />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={`/${categories[0].slug}`} replace />} />
        <Route path=":categorySlug" element={<CategoryPageWrapper />} />
      </Route>
    </Routes>
  );
}

export default App;
