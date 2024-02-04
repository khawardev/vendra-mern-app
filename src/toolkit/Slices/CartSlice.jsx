// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        totalSubtotal: JSON.parse(localStorage.getItem('totalSubtotal')) || 0,
        productQuantities: JSON.parse(localStorage.getItem('productQuantities')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { quantity } = action.payload;
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                // If the item already exists, update its quantity
                state.cartItems[existingItemIndex].quantity += quantity;
                state.productQuantities[existingItemIndex] += quantity;
            } else {
                // If it's a new item, add it to the cart and update quantities
                state.cartItems.push({ ...newItem, quantity: quantity });
                state.productQuantities.push(quantity);
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
                localStorage.setItem('productQuantities', JSON.stringify(state.productQuantities));
            }
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            const itemToRemoveIndex = state.cartItems.findIndex(item => item.id === itemIdToRemove);

            if (itemToRemoveIndex !== -1) {
                const removedQuantity = state.cartItems[itemToRemoveIndex].quantity;
                state.cartItems.splice(itemToRemoveIndex, 1);
                state.productQuantities.splice(itemToRemoveIndex, 1);
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
                localStorage.setItem('productQuantities', JSON.stringify(state.productQuantities));

                state.totalSubtotal -= removedQuantity;
                localStorage.setItem('totalSubtotal', state.totalSubtotal.toString());
            }
        },
        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === itemId);

            if (itemIndex !== -1) {
                const quantityDifference = quantity - state.cartItems[itemIndex].quantity;
                state.cartItems[itemIndex].quantity = quantity;
                state.productQuantities[itemIndex] += quantityDifference;
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
                localStorage.setItem('productQuantities', JSON.stringify(state.productQuantities));
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.productQuantities = [];
            state.totalSubtotal = 0;
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            localStorage.setItem('productQuantities', JSON.stringify(state.productQuantities));
            localStorage.removeItem('totalSubtotal');
        },
        setTotalSubtotal: (state, action) => {
            state.totalSubtotal = action.payload;
            localStorage.setItem('totalSubtotal', action.payload.toString());
        },

    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setTotalSubtotal,
    
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectProductQuantities = (state) => state.cart.productQuantities;

export default cartSlice.reducer;