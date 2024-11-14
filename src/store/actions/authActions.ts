import {AppDispatch} from "../store";
import {authSlice} from "../reducers/authSlice";
import {notificationSlice} from "../reducers/notificationSlice";
import {IUserBase} from "../../interface/IUser";
import axios from "axios";
import {getAuthConfigApplicationJson, getRequestHeaders} from "../../utils/requestHeaders";


export const signup = (user: IUserBase) => async (dispatch: AppDispatch) => {
    try {
        await axios.post(process.env.REACT_APP_API_URL + '/signup/', JSON.stringify(user), getRequestHeaders())
        dispatch(authSlice.actions.signUpSuccess())
        dispatch(notificationSlice.actions.setSuccessMessage('Регистрация прошла успешно'))
    } catch {
        dispatch(authSlice.actions.signUpFail())
        dispatch(notificationSlice.actions.setError('Ошибка регистрации'))
    }
}


export const loginUser = (user: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post(process.env.REACT_APP_API_URL + '/login/', JSON.stringify(user), getRequestHeaders())
        if (response.status === 200) {
            dispatch(authSlice.actions.loginSuccess(response.data))
            dispatch(notificationSlice.actions.setSuccessMessage('Вы вошли!'))
        } else {
            dispatch(authSlice.actions.loginFail())
            dispatch(notificationSlice.actions.setError(response.data.message))
        }
    } catch {
        dispatch(notificationSlice.actions.setError('Ошибка входа'))
    }
}

export const loggedIn = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        dispatch(authSlice.actions.loggedIn())
    }
}

export const logoutUser = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/logout/', JSON.stringify({}), getAuthConfigApplicationJson(token))
            response.status === 200
                ? dispatch(authSlice.actions.logoutSuccess(response.data))
                : dispatch(authSlice.actions.logoutFail(response.data.message))
        } catch {
            dispatch(notificationSlice.actions.setError('Ошибка выхода'))
        }
    } else {
        dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
    }
}

export const loadCurrentUser = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            dispatch(authSlice.actions.fetchingCurrentUser())
            const response = await axios.get(process.env.REACT_APP_API_URL + '/users/me', getAuthConfigApplicationJson(token))
            response.status === 200
                ? dispatch(authSlice.actions.loadCurrentUserSuccess(response.data))
                : dispatch(authSlice.actions.loadCurrentUserFail(response.data.message))
        } catch {
            dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
        }
    } else {
        dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
    }
}