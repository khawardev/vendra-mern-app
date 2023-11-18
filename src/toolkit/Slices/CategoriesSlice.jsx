import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesitems: [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.categoriesitems = action.payload;
        },
    },
});

export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.categoriesitems;

export default categoriesSlice.reducer;
