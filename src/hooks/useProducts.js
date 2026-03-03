import { useMemo } from "react";
import { products } from "../data/catalog";

const getEffectivePrice = (product) =>
  product.discountedPrice ?? product.price;

export default function useProducts(categorySlug, filters, sortBy) {
  return useMemo(() => {
    let result = products.filter((p) => p.category === categorySlug);

    const totalInCategory = result.length;

    const availableColors = [...new Set(result.map((p) => p.color))].sort();

    const prices = result.map(getEffectivePrice);
    const priceRange = { min: Math.min(...prices), max: Math.max(...prices) };

    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.includes(p.color));
    }

    if (filters.minPrice > priceRange.min || filters.maxPrice < priceRange.max) {
      result = result.filter((p) => {
        const effective = getEffectivePrice(p);
        return effective >= filters.minPrice && effective <= filters.maxPrice;
      });
    }

    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        result.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
        break;
      case "price-desc":
        result.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
        break;
    }

    return { filteredProducts: result, totalInCategory, availableColors, priceRange };
  }, [categorySlug, filters, sortBy]);
}
