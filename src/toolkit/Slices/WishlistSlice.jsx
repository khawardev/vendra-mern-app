// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistItems: JSON.parse(localStorage.getItem('wishlist')) || []  ,
    },
    reducers: {
        addToWishlist: (state, action) => {
            const { id } = action.payload;
            if (!state.wishlistItems.find(item => item.id === id)) {
                state.wishlistItems.push(action.payload);
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
        },
        removeFromWishlist: (state, action) => {
            const idToRemove = action.payload;
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== idToRemove);
            localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
        },
        clearWishlist: (state) => {
            state.wishlistItems = [];
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export const selectWishlistItems = state => state.wishlist.wishlistItems;

export default wishlistSlice.reducer;
