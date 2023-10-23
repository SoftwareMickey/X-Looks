import { createSlice } from "@reduxjs/toolkit";

const authState = [false, true];

const AuthSlice = createSlice({
    name:'auth',
    initialState: {isLoggedIn: false},
    reducers: {
        LogInHandler: (state, action) => {
            state.isLoggedIn = authState[1];
            window.localStorage.setItem("authstate", JSON.stringify(state.isLoggedIn))
        },
        LogOutHandler: (state, action) => {
            state.isLoggedIn = authState[0];
            window.localStorage.setItem("authstate", JSON.stringify(state.isLoggedIn))
        }
    }
})

export default AuthSlice;