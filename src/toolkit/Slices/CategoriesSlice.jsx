import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesitems: JSON.parse(localStorage.getItem('categories')) || [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.categoriesitems = action.payload;
            // localStorage.setItem('categories', JSON.stringify(state.categoriesitems));
        },
    },
});

export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.categoriesitems;

export default categoriesSlice.reducer;
