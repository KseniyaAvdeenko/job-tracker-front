import {IVacancyInitialState} from "../../interface/IinitialState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVacancy, IVacancyStatus} from "../../interface/IVacancy";


const initialState: IVacancyInitialState = {
    isLoading: false,
    vacancies: null,
    vacancy: null,
    status: null,
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
        loadStatusFail(state) {
            state.isLoading = false;
            state.status = null;
        },
        fetchingVacancies(state) {
            state.isLoading = true
        },
        loadVacanciesSuccess(state, action: PayloadAction<IVacancy[]>) {
            state.isLoading = false;
            state.vacancies = action.payload;
        },
        loadVacanciesFail(state) {
            state.isLoading = false;
            state.vacancies = null;
        },
        fetchingVacancy(state) {
            state.isLoading = true
        },
        loadVacancySuccess(state, action: PayloadAction<IVacancy>) {
            state.isLoading = false;
            state.vacancy = action.payload;
        },
        loadVacancyFail(state) {
            state.isLoading = false;
            state.vacancy = null;
        },
        createVacancySuccess(state, action: PayloadAction<IVacancy>) {
            state.vacancy = action.payload;
        },
        createVacancyFail(state) {
            state.vacancy = null
        },
        updateVacancySuccess(state, action: PayloadAction<IVacancy>) {
            state.vacancy = action.payload;
        },
        deleteVacancySuccess(state) {
            state.vacancy = null;
        },
    }
})

export default vacancySlice.reducer;