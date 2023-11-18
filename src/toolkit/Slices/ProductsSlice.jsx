import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productitems: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.productitems = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.productitems;

export default productsSlice.reducer;
