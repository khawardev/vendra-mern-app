import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductsSlice';
import categoriesReducer from './Slices/CategoriesSlice';
import cartReducer from './Slices/CartSlice';
import wishlistReducer from './Slices/WishlistSlice';
import UserReducer from './Slices/UserSlice';
import BestSellingReducer from './Slices/BestSellingSlice';
import DicountReducer from './Slices/DicountSlice';
import CompareReducer from './Slices/CompareSlice';
import currencyReducer from '../components/WebScrapper/currencySlice';
import ReviewReducer from './Slices/ReviewSlice'
const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        user: UserReducer,
        bestSelling: BestSellingReducer,
        discount: DicountReducer,
        compare: CompareReducer,
        currency: currencyReducer,
        review: ReviewReducer,

    },
});

export default store;
