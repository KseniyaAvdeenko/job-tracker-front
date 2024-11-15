export interface IVacancyBase {
    userId: string;
    company: string;
    vacancy: string;
    salary: string;
    status: string;
    note: string;
}

export interface IVacancy extends IVacancyBase {
    _id: string
}

export interface IVacancyStatus {
    _id: string
    name: StatusName;
    color: string;
}


export type StatusName =
    'Получено тестовое'
    | 'Приглашен на собеседование'
    | 'Получен оффер'
    | 'Не просмотрено'
    | 'Отказ'
    | 'В архиве';


