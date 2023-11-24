import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductsSlice';
import categoriesReducer from './Slices/CategoriesSlice';
import cartReducer from './Slices/CartSlice';
import wishlistReducer from './Slices/WishlistSlice';
const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
});

export default store;
