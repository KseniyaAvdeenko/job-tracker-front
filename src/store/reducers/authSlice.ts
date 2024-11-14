import {IAuthInitialState} from "../../interface/IinitialState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserToken} from "../../interface/IUser";

const initialState: IAuthInitialState = {
    isLoading: false,
    isAuth: false,
    token: localStorage.token ?? null,
    currentUser: null,
    signedUp: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchingCurrentUser(state) {
            state.isLoading = true
        },
        loadCurrentUserSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loadCurrentUserFail(state) {
            state.isLoading = false;
            state.currentUser = null;
        },
        loginSuccess(state, action: PayloadAction<IUserToken>) {
            state.isAuth = true;
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
        },
        loginFail(state) {
            state.isAuth = false;
        },
        loggedIn(state) {
            state.isAuth = true;
        },
        signUpSuccess(state) {
            state.isAuth = false;
            state.signedUp = true
        },
        signUpFail(state) {
            state.isAuth = false;
            state.signedUp = false;
        },
        logoutSuccess(state) {
            state.isAuth = false;
            localStorage.removeItem('token')
        },
        logoutFail(state) {
            state.isAuth = false;
        },
    }
})

export default authSlice.reducer;