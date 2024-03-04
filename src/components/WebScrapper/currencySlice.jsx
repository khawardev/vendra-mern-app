import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        latestRates: {}, // Initial state should be an empty object
    },
    reducers: {
        setLatestRates: (state, action) => {
            state.latestRates = action.payload;
        },
    },
});

export const { setLatestRates } = currencySlice.actions;

export const selectCurrencyValue = (state, currencyCode) => {
    const currency = state.currency.latestRates[currencyCode];
    if (currency) {
        return currency.value.toFixed(2);
    } else {
        return 'N/A';
    }
};

export default currencySlice.reducer;
