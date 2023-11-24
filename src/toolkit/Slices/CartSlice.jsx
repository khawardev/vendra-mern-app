// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        totalSubtotal: JSON.parse(localStorage.getItem('totalSubtotal')) ||  0,
    },
    // JSON.parse(localStorage.getItem('cart')) ||
    // JSON.parse(localStorage.getItem('totalSubtotal')) || 
    reducers: {
        addToCart: (state, action) => {
            const { quantity } = action.payload;
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartItems.push({ ...newItem, quantity: quantity });
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === itemId);

            if (itemIndex !== -1) {
                // Create a new array to update state immutably
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[itemIndex] = {
                    ...updatedCartItems[itemIndex],
                    quantity: quantity,
                };

                state.cartItems = updatedCartItems;
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
            }
        },
        setTotalSubtotal: (state, action) => {
            state.totalSubtotal = action.payload;
            if (action.payload !== 0) {
                localStorage.setItem('totalSubtotal', action.payload.toString());
            } else {
                localStorage.removeItem('totalSubtotal');
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setTotalSubtotal } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
