import {IAuthInitialState} from "../../interface/IinitialState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserToken} from "../../interface/IUser";

const initialState: IAuthInitialState = {
    isLoading: false,
    error: '',
    isAuth: false,
    token: null,
    currentUser: null,
    message: ''
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
        loadCurrentUserFail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.currentUser = null;
            state.error = action.payload
        },
        loginSuccess(state, action: PayloadAction<IUserToken>) {
            state.isAuth = true;
            state.token = action.payload.token
        },
        loginFail(state, action: PayloadAction<string>) {
            state.isAuth = false;
            state.error = action.payload
        },
        signUpSuccess(state, action: PayloadAction<string>) {
            state.isAuth = false;
            state.message = action.payload
        },
        signUpFail(state, action: PayloadAction<string>) {
            state.isAuth = false;
            state.error = action.payload
        },
        logoutSuccess(state, action: PayloadAction<string>) {
            state.isAuth = false;
            state.message = action.payload
        },
        logoutFail(state, action: PayloadAction<string>) {
            state.isAuth = false;
            state.error = action.payload
        },
    }
})

export default authSlice.reducer;