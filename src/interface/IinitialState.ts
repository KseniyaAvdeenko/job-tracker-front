import {IUser} from "./IUser";
import {IVacancy, IVacancyStatus} from "./IVacancy";

export interface IInitialStateBase {
    isLoading: boolean;
}

export interface IAuthInitialState extends IInitialStateBase{
    isAuth: boolean;
    signedUp: boolean;
    currentUser: IUser | null;
    token: string|null
}

export interface IVacancyInitialState extends IInitialStateBase{
    vacancies: IVacancy[]|null
    vacancy: IVacancy|null
    status: IVacancyStatus[]|null
}

export interface INotificationsInitialState{
    error: string;
    message: string
}