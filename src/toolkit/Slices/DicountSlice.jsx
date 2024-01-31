/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const DiscountSlice = createSlice({
    name: 'discount',
    initialState: {
        discountitems: [],
    },
    // JSON.parse(localStorage.getItem('bestSelling')) ||
    reducers: {
        setdiscount: (state, action) => {
            // state.productitems = action.payload;
            state.discountitems = state.discountitems.concat(action.payload);
            // localStorage.setItem('products', JSON.stringify(state.productitems));
        },
    },
});

export const { setdiscount } = DiscountSlice.actions;
export const selectdiscount = (state) => state.discount.discountitems;
export default DiscountSlice.reducer;



