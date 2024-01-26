/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        usersinfo: [],
        singleusersinfo: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.usersinfo.push(action.payload);
        },
        setSingleUser: (state, action) => {
            state.singleusersinfo.push(action.payload);
        },
    },
});

export const { setUser, setSingleUser } = UserSlice.actions;
export const selectUsers = (state) => state.user.usersinfo;
export const selectSingleUsers = (state) => state.user.singleusersinfo;
export default UserSlice.reducer;
