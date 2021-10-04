import { createSlice } from '@reduxjs/toolkit';

// CREATE A USER SLICE TO KEEP ALL OF THE USER INFO SEPARATED FROM ANY OTHER INFO THE STORE MAY HAVE SO THAT WE DON'T PUT ALL OF OUR INFO INTO
// A SINGLE STORE
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        // ACTIONS
        // To be able to interact with the global store, we have to be able to DISPATCH these actions
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions;

// SELECTORS: WE CAN PUSH INFO TO THE STORE WITH ACTIONS BUT WITH SELECTORS WE CAN FETCH THESE VALUES FROM THE STORE TO BE ABLE TO USE THEM IN OUR
// COMPONENTS

export const selectUser = state => state.user.user;

export default userSlice.reducer;