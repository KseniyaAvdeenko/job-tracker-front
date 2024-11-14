import React, {FC} from 'react';
import {IVacancy} from "../interface/IVacancy";
import {Link} from "react-router-dom";
import {useAppSelector} from "../hooks/useAppSelector";
import {getStatusColor} from "../utils/getStatusColor";

interface IVacancyItemProps {
    vacancy: IVacancy;
    deleteRespToVacancy: Function
}

const VacancyItem: FC<IVacancyItemProps> = ({vacancy, deleteRespToVacancy}) => {
    const {status} = useAppSelector(state => state.vacancyReducer)


    return (
        <tr className="text-bg-200 text-2xl border-b border-primary-300" style={{
            background: getStatusColor(vacancy.status, status ? status : []),
            color: getStatusColor(vacancy.status, status ? status : []) ? '#ffffff' : '#313d44'
        }}>
            <td className={'py-4 px-1'}>{vacancy.company}</td>
            <td className={'py-4 px-1'}>{vacancy.vacancy}</td>
            <td className={'py-4 px-1'}>{vacancy.salary}</td>
            <td className={'py-4 px-1'}>{vacancy.status}</td>
            <td className={'py-4 px-1'}>{vacancy.note}</td>
            <td className={'py-4 px-1'}>
                <Link to={'/vacancies/' + vacancy._id}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H12C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16V15M13 3L16 6M17.385 4.585C17.7788 4.19115 18.0001 3.65698 18.0001 3.1C18.0001 2.54302 17.7788 2.00885 17.385 1.615C16.9912 1.22115 16.457 0.999893 15.9 0.999893C15.343 0.999893 14.8088 1.22115 14.415 1.615L6 10V13H9L17.385 4.585Z"
                            stroke="#1d1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </td>
            <td className={'py-4 px-1'}>
                <svg className="cursor" width="14" height="18" viewBox="0 0 14 18" fill="none"
                     onClick={() => deleteRespToVacancy(vacancy._id)}
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z"
                        fill="#1d1c1c"/>
                </svg>
            </td>
        </tr>
    );
};

export default VacancyItem;
