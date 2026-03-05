import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoryPageWrapper from "./pages/CategoryPageWrapper";
import ProductPage from "./pages/ProductPage";
import { categories } from "./data/catalog";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<Navigate to={`/${categories[0].slug}`} replace />}
        />
        <Route path=":categorySlug/:productId" element={<ProductPage />} />
        <Route path=":categorySlug" element={<CategoryPageWrapper />} />
        <Route
          path="*"
          element={<Navigate to={`/${categories[0].slug}`} replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
