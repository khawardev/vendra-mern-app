/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const BestSellingSlice = createSlice({
    name: 'bestSelling',
    initialState: {
        bestSellingitems: [],
        removedProductIds: [],
    },
    // JSON.parse(localStorage.getItem('bestSelling')) ||
    reducers: {
        setbestSelling: (state, action) => {
            state.bestSellingitems = state.bestSellingitems.concat(action.payload);
        },
        removeBestSelling: (state, action) => {
            const productIdToRemove = action.payload;
            state.bestSellingitems = state.bestSellingitems.filter(item => item?.id !== productIdToRemove);
            state.removedProductIds = state.removedProductIds.concat(productIdToRemove);
        },
    },
});

export const { setbestSelling, removeBestSelling } = BestSellingSlice.actions;
export const selectbestSelling = (state) => state.bestSelling.bestSellingitems;
export const selectRemovedProductIds = (state) => state.bestSelling.removedProductIds;
export default BestSellingSlice.reducer;



