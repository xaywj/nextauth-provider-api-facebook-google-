import { createSlice } from "@reduxjs/toolkit";
export const Authslice = createSlice({
    name: "i love you",
    initialState: {
        user: {
            name: "xaywj",
            email: "xaywj@gmail.com",
            photo: "02078149878",
            role: "admin",
        }
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = {
                name: "",
                email: "",
                photo: "",
                role: "",
            };
        },
        auth: (state) => {
            state.user
        }
    }
})
export const { login, logout, auth } = Authslice.actions;
export default Authslice.reducer;