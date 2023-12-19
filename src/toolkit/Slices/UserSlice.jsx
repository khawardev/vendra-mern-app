/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        usersinfo: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.usersinfo.push(action.payload);
        },
    },
});

export const { setUser } = UserSlice.actions;
export const selectUsers = (state) => state.user.usersinfo;
export default UserSlice.reducer;
