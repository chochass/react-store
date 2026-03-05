# Product Listing Page

A front-end e-commerce Product Listing Page (PLP) built with React. Users can browse products by category, filter by color and price, sort results, view product details, and add items to a cart.

---

## Features

### Required
- **Header**
  - Logo + navigation menu with two categories (Bags, Shoes)
  - Sticky header
  - First category loads by default
- **Product Counter**
  - “Showing X of Y products”
- **Product Grid**
  - Image, name, short description, price (with discount), star rating
  - **Add to Cart** button + success toast
- **Initial Load + Load More**
  - Grid initially limited to **20 products**
  - “Load More” reveals additional products
- **Filters**
  - Left sidebar:
    - Color checkboxes
    - Price range (min/max + **Apply**)
  - Mobile filter drawer
- **Sorting**
  - Dropdown above grid:
    - Default
    - A–Z
    - Z–A
    - Price Low → High
    - Price High → Low
- **Category Title**
  - Category name + description above the grid
- **Footer**
  - Terms, Privacy, Contact links
- **Responsive**
  - Mobile hamburger menu
  - Mobile filter trigger
  - Responsive grid (2 → 3 → 4 → 5 columns)

### Additional
- **Product Detail Page (PDP)**
  - Full image, description, price, quantity selector, Add to Cart
- **Cart Drawer**
  - Accessible from header
  - Shows items, quantities, total
  - Cart state managed via React Context (optional persistence via `localStorage`)
- **Back to Top**
  - Appears when all products are loaded (replaces “Load More”)
- **Not Found Handling**
  - “Category not found” and “Product not found” pages
  - Invalid routes redirect to the default category

---

## Tech Stack
- **React 19** — UI components and state management
- **React Router DOM** — client-side routing
- **Tailwind CSS 4** — utility-first styling and responsive layout
- **Vite** — dev server and build tool
- **react-hot-toast** — Add to Cart notifications
- **react-icons** — icon set (Heroicons)

> No backend. Sample data is defined in `src/data/catalog.js`.

---

## How the Solution Was Achieved

- **Routing:** Implemented with React Router using `/:categorySlug` for the PLP and `/:categorySlug/:productId` for the PDP. Index and wildcard routes redirect users to the default category, while missing category/product pages show dedicated “not found” screens.
- **Data:** No backend is used. Categories and products are defined in `src/data/catalog.js`, including enough variation (colors, prices, discounts) to exercise filtering and sorting.
- **Filtering & Sorting:** Product filtering (category, color, price range) and sorting are handled in a custom `useProducts` hook. Derived lists are memoized with `useMemo` for performance and predictable updates.
- **Cart:** Cart state is managed via a `CartProvider` (React Context) so it’s accessible across pages. A cart drawer provides quick access, and persistence can be optionally handled with `localStorage`.
- **UI & Layout:** Tailwind CSS is used for responsive layout, sticky header/sidebar, grid breakpoints, and mobile drawers (menu + filters). Toast notifications confirm add-to-cart actions.

---

## Challenges

- **CSS & layout (Tailwind):** The layout required the most iteration. I implemented a sticky header and sticky sidebar, centered the navigation without breaking the clickable areas for the logo and cart, and ensured the grid and filters stay correctly placed across breakpoints with consistent spacing. This involved careful tuning of Tailwind utilities such as `flex`, `grid`, and `sticky`, plus a few positioning and hitbox adjustments using `absolute` elements and `pointer-events` where necessary.

- **Price filter logic:** The price range filter required deliberate state and validation handling. The inputs are controlled as strings to support empty values, while the applied filter state is stored as numbers or `null` to represent “no limit.” On Apply, the values are parsed and normalized, the range is validated, Apply is disabled when `min > max`, and conversions are handled in a way that keeps the UI predictable and the filtering logic consistent.

- **Separation of concerns:** As the feature set expanded, I refactored to keep responsibilities clear. Filter state lives at the page level so it can drive routing and product queries, while UI components remain reusable and focused on rendering. Filtering and sorting logic is centralized in `useProducts`, with memoized derived results to keep updates predictable and maintainable.
