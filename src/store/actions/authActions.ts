import {AppDispatch} from "../store";
import {authSlice} from "../reducers/authSlice";
import {IUser, IUserBase} from "../../interface/IUser";
import axios from "axios";
import {getAuthConfigApplicationJson, getRequestHeaders} from "../../utils/requestHeaders";


export const signup = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('https://job-tracker-api.vercel.app/api/signup/', JSON.stringify(user), getRequestHeaders())
        response.status === 201
            ? dispatch(authSlice.actions.signUpSuccess(response.data))
            : dispatch(authSlice.actions.signUpFail(response.data.message))
    } catch {
        dispatch(authSlice.actions.signUpFail('Ошибка регистрации'))
    }
}


export const loginUser = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('https://job-tracker-api.vercel.app/api/login/', JSON.stringify(user), getRequestHeaders())
        response.status === 200
            ? dispatch(authSlice.actions.loginSuccess(response.data))
            : dispatch(authSlice.actions.loginFail(response.data.message))
    } catch {
        dispatch(authSlice.actions.loginFail('Ошибка входа'))
    }
}

export const logoutUser = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.post('https://job-tracker-api.vercel.app/api/logout/', null, getAuthConfigApplicationJson(token))
            response.status === 200
                ? dispatch(authSlice.actions.logoutSuccess(response.data))
                : dispatch(authSlice.actions.logoutFail(response.data.message))
        } catch {
            dispatch(authSlice.actions.logoutFail('Ошибка выхода'))
        }
    } else {
        dispatch(authSlice.actions.logoutFail('Вы не авторизованы'))
    }
}

export const loadCurrentUser = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            dispatch(authSlice.actions.fetchingCurrentUser())
            const response = await axios.get('https://job-tracker-api.vercel.app/api/users/me', getAuthConfigApplicationJson(token))
            response.status === 200
                ? dispatch(authSlice.actions.loadCurrentUserSuccess(response.data))
                : dispatch(authSlice.actions.loadCurrentUserFail(response.data.message))
        } catch {
            dispatch(authSlice.actions.loadCurrentUserFail('Вы не авторизованы'))
        }
    } else {
        dispatch(authSlice.actions.loadCurrentUserFail('Вы не авторизованы'))
    }
}