import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductsSlice';
import categoriesReducer from './Slices/CategoriesSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
    },
});

export default store;
