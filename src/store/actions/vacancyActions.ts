import {AppDispatch} from "../store";
import axios from "axios";
import {vacancySlice} from "../reducers/vacancySlice";
import {notificationSlice} from "../reducers/notificationSlice";
import {getAuthConfigApplicationJson, getRequestHeaders} from "../../utils/requestHeaders";
import {IVacancyBase} from "../../interface/IVacancy";

export const loadVacancyStatus = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(vacancySlice.actions.fetchingStatus())
        const response = await axios.get(process.env.REACT_APP_API_URL + '/status/', getRequestHeaders())
        dispatch(vacancySlice.actions.loadStatusSuccess(response.data))
    } catch {
        dispatch(vacancySlice.actions.loadStatusFail())
        dispatch((notificationSlice.actions.setError('Ошибка загрузки статуса вакансии')))
    }
}

export const loadVacancies = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            dispatch(vacancySlice.actions.fetchingVacancies())
            const response = await axios.get(process.env.REACT_APP_API_URL + '/vacancies/', getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.loadVacanciesSuccess(response.data))
        } catch {
            dispatch(vacancySlice.actions.loadVacanciesFail())
            dispatch((notificationSlice.actions.setError('Ошибка загрузки вакансий')))
        }
    } else {
        dispatch((notificationSlice.actions.setError('Вы не авторизованы')))
    }
}

export const loadVacancy = (token: string, id: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            dispatch(vacancySlice.actions.fetchingVacancy())
            const response = await axios.get(process.env.REACT_APP_API_URL + '/vacancies/' + id, getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.loadVacancySuccess(response.data))
        } catch {
            dispatch(vacancySlice.actions.loadVacancyFail())
            dispatch((notificationSlice.actions.setError('Ошибка загрузки вакансии')))
        }
    } else {
        dispatch((notificationSlice.actions.setError('Вы не авторизованы')))
    }
}

export const createVacancy = (token: string, vacancy: IVacancyBase) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/vacancies/', JSON.stringify(vacancy), getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.createVacancySuccess(response.data))
            dispatch((notificationSlice.actions.setSuccessMessage('Вакансия создана успешно')))
            dispatch(loadVacancies(token))
        } catch {
            dispatch(vacancySlice.actions.createVacancyFail())
            dispatch((notificationSlice.actions.setError('Ошибка создания вакансии')))
        }
    } else {
        dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
    }
}
export const updateVacancy = (token: string, id: string, data: any) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.put(process.env.REACT_APP_API_URL + '/vacancies/' + id, JSON.stringify(data), getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.updateVacancySuccess(response.data))
            dispatch((notificationSlice.actions.setSuccessMessage('Вакансия обновлена успешно')))
            dispatch(loadVacancies(token))
        } catch {
            dispatch(notificationSlice.actions.setError('Ошибка обновления вакансии'))
        }
    } else {
        dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
    }
}
export const deleteVacancy = (token: string, id: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.delete(process.env.REACT_APP_API_URL + '/vacancies/' + id, getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.deleteVacancySuccess(response.data))
            dispatch((notificationSlice.actions.setSuccessMessage('Вакансия удалена успешно')))
            dispatch(loadVacancies(token))
        } catch {
            dispatch(notificationSlice.actions.setError('Ошибка удаления вакансий'))
        }
    } else {
        dispatch(notificationSlice.actions.setError('Вы не авторизованы'))
    }
}