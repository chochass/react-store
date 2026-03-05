import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoryPageWrapper from "./pages/CategoryPageWrapper";
import ProductPage from "./pages/ProductPage";
import { defaultCategorySlug } from "./data/catalog";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<Navigate to={`/${defaultCategorySlug}`} replace />}
        />
        <Route path=":categorySlug/:productId" element={<ProductPage />} />
        <Route path=":categorySlug" element={<CategoryPageWrapper />} />
        <Route
          path="*"
          element={<Navigate to={`/${defaultCategorySlug}`} replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
