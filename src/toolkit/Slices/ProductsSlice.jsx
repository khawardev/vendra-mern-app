import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productitems: JSON.parse(localStorage.getItem('products')) || [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.productitems = action.payload;
            // localStorage.setItem('products', JSON.stringify(state.productitems));
        },
    },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.productitems;

export default productsSlice.reducer;
