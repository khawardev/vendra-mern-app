/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const BestSellingSlice = createSlice({
    name: 'bestSelling',
    initialState: {
        bestSellingitems: [],
    },
    // JSON.parse(localStorage.getItem('bestSelling')) ||
    reducers: {
        setbestSelling: (state, action) => {
            // state.productitems = action.payload;
            state.bestSellingitems = state.bestSellingitems.concat(action.payload);
            // localStorage.setItem('products', JSON.stringify(state.productitems));
        },
    },
});

export const { setbestSelling } = BestSellingSlice.actions;
export const selectsetbestSelling = (state) => state.bestSelling.bestSellingitems;
export default BestSellingSlice.reducer;



