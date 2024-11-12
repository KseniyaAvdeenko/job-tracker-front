import {IUser} from "./IUser";
import {IVacancy, IVacancyStatus} from "./IVacancy";

export interface IInitialStateBase {
    error: string;
    isLoading: boolean;
    message: string
}

export interface IAuthInitialState extends IInitialStateBase{
    isAuth: boolean;
    currentUser: IUser | null;
    token: string|null
}

export interface IVacancyInitialState extends IInitialStateBase{
    vacancies: IVacancy[]|null
    vacancy: IVacancy|null
    status: IVacancyStatus[]|null
}