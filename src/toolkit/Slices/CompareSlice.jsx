/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const CompareSlice = createSlice({
    name: 'compare',
    initialState: {
        comparedProducts: [],
        exchangeRate: null, // Only one value for exchange rate
    },
    reducers: {
        addToCompare: (state, action) => {
            state.comparedProducts.push(action.payload);
        },
        removeCompareProduct: (state, action) => {
            state.comparedProducts = state.comparedProducts.filter(product => product.id !== action.payload);
        },
        addToExchange: (state, action) => {
            state.exchangeRate = action.payload;
        },
        RemoveFromExchange: (state) => {
            state.exchangeRate = null;
        },
    },
});

export const { addToCompare, removeCompareProduct, addToExchange, RemoveFromExchange } = CompareSlice.actions;
export const selectCompare = (state) => state.compare.comparedProducts;
export const selectExchangeRate = (state) => state.compare.exchangeRate; 

export default CompareSlice.reducer;
