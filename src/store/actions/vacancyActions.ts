import {AppDispatch} from "../store";
import axios from "axios";
import {vacancySlice} from "../reducers/vacancySlice";
import {getAuthConfigApplicationJson, getRequestHeaders} from "../../utils/requestHeaders";
import {IVacancyBase} from "../../interface/IVacancy";

export const loadVacancyStatus = () => async (dispatch: AppDispatch) => {

    try {
        dispatch(vacancySlice.actions.fetchingStatus())
        const response = await axios.get('https://job-tracker-api.vercel.app/api/status/', getRequestHeaders())
        dispatch(vacancySlice.actions.loadStatusSuccess(response.data))
    } catch {
        dispatch(vacancySlice.actions.loadStatusFail('Ошибка загрузки статуса вакансии'))
    }
}

export const loadVacancies = (token: string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            dispatch(vacancySlice.actions.fetchingVacancies())
            const response = await axios.get('https://job-tracker-api.vercel.app/api/vacancies/', getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.loadVacanciesSuccess(response.data))
        } catch {
            dispatch(vacancySlice.actions.loadVacanciesFail('Ошибка загрузки вакансий'))
        }
    } else {
        dispatch(vacancySlice.actions.loadVacanciesFail('Вы не авторизованы'))
    }
}

export const createVacancy = (token: string, vacancy: IVacancyBase) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.post('https://job-tracker-api.vercel.app/api/vacancies/', JSON.stringify(vacancy), getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.createVacancySuccess(response.data))
            dispatch(loadVacancies(token))
        } catch {
            dispatch(vacancySlice.actions.createVacancyFail('Ошибка создания вакансии'))
        }
    } else {
        dispatch(vacancySlice.actions.createVacancyFail('Вы не авторизованы'))
    }
}
export const updateVacancy = (token: string, id: number|string, data: any) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.put('https://job-tracker-api.vercel.app/api/vacancies/' + id, getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.updateVacancySuccess(response.data))
        } catch {
            dispatch(vacancySlice.actions.updateVacancyFail('Ошибка обновления вакансии'))
        }
    } else {
        dispatch(vacancySlice.actions.updateVacancyFail('Вы не авторизованы'))
    }
}
export const deleteVacancy = (token: string, id: number|string) => async (dispatch: AppDispatch) => {
    if (token) {
        try {
            const response = await axios.delete('https://job-tracker-api.vercel.app/api/vacancies/'+ id, getAuthConfigApplicationJson(token))
            dispatch(vacancySlice.actions.deleteVacancySuccess(response.data))
        } catch {
            dispatch(vacancySlice.actions.deleteVacancyFail('Ошибка удаления вакансий'))
        }
    } else {
        dispatch(vacancySlice.actions.deleteVacancyFail('Вы не авторизованы'))
    }
}