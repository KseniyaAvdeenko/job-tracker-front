import {IVacancyStatus} from "../interface/IVacancy";

export const getStatusColor = (vacancyStatus: string, statusArray: IVacancyStatus[]): string => {
    let color = 'transparent';
    statusArray && statusArray.map(respStatus => {
        if (respStatus.name === vacancyStatus) color = respStatus.color
    })
    return color
}