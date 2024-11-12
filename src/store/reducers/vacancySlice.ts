import {IVacancyInitialState} from "../../interface/IinitialState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVacancy, IVacancyStatus} from "../../interface/IVacancy";


const initialState: IVacancyInitialState = {
    isLoading: false,
    error: '',
    vacancies: null,
    vacancy: null,
    status: null,
    message: ''
}

export const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        fetchingStatus(state) {
            state.isLoading = true
        },
        loadStatusSuccess(state, action: PayloadAction<IVacancyStatus[]>) {
            state.isLoading = false;
            state.status = action.payload;
        },
        loadStatusFail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.status = null;
            state.error = action.payload
        },
        fetchingVacancies(state) {
            state.isLoading = true
        },
        loadVacanciesSuccess(state, action: PayloadAction<IVacancy[]>) {
            state.isLoading = false;
            state.vacancies = action.payload;
        },
        loadVacanciesFail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.vacancies = null;
            state.error = action.payload
        },
        createVacancySuccess(state, action: PayloadAction<IVacancy>) {
            state.vacancy = action.payload;
            state.message = 'Вакансия создана успешно'
        },
        createVacancyFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        updateVacancySuccess(state, action: PayloadAction<IVacancy>) {
            state.vacancy = action.payload;
        },
        updateVacancyFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        deleteVacancySuccess(state, action: PayloadAction<string>) {
            state.vacancy = null;
            state.message = action.payload
        },
        deleteVacancyFail(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    }
})

export default vacancySlice.reducer;