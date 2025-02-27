Product Filtering and Pagination in React

This is a product filtering and pagination feature built with React. It allows users to search and filter products by category, price range, and popularity. The project uses the DummyJSON API to fetch product data, which is then filtered and displayed based on user input. It also implements pagination to efficiently display a large number of products.

Features:
Search Functionality: Users can search for products by title.
Category Filter: Users can filter products by selecting a category from a dynamic list fetched from the API.
Price Range Filter: Filter products within a specified price range.
Sorting Options: Sort products by price (cheap or expensive) or popularity.
Keyword Filter: Users can filter products based on predefined keywords like "apple", "watch", "fashion", etc.
Reset Filters: Users can reset all applied filters to return to the default state.
Pagination: Navigate through pages of products with a responsive pagination system.
Responsive Design: The layout is fully responsive, adjusting to different screen sizes.
Technologies:
React
Axios (for API calls)
TypeScript (for type safety)
Tailwind CSS (for styling)
DummyJSON API (for sample product data)
Context API (for managing global state)
This project demonstrates state management using React's Context API, efficient filtering and pagination, and how to integrate external data into a React application. The user interface is clean, modern, and fully responsive, providing a great user experience.








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
