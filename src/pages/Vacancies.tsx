import React, {FC} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {deleteVacancy} from "../store/actions/vacancyActions";
import VacancyItem from "../components/VacancyItem";

const Vacancies:FC<{setIsOpenModal: Function}> = ({setIsOpenModal}) => {
    const {token} = useAppSelector(state => state.authReducer)
    const {vacancies} = useAppSelector(state => state.vacancyReducer)
    const dispatch = useAppDispatch()

    const deleteRespToVacancy = (id: string) => {
        if (token) dispatch(deleteVacancy(token, id))
    }

    return (
        <main className={'w-full flex flex-col px-32 py-16 relative'}>

            <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col mb-10">
                    <h2 className="text-3xl font-bold text-text-100 mb-4">Отклики</h2>
                    <p className='text-2xl text-text-200'>Список ваших откликов на вакансии</p>
                </div>
                <button type="button" style={{lineHeight: 0}} onClick={()=>setIsOpenModal(true)}
                        className="flex justify-center items-center font-black text-3xl  rounded-full py-8 px-6 bg-accent-200 hover:bg-accent-100 text-bg-100 flex items-center justify-center">
                    +
                </button>
            </div>

            <table className="table-auto">
                <thead className="text-2xl">
                <tr className={'border-b-2 border-primary-300'}>
                    <th>Компания 🏢</th>
                    <th>Вакансия 📋</th>
                    <th>Зарплатная вилка 💸</th>
                    <th>Статус отклика 📊</th>
                    <th>Заметка 📝</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {vacancies && vacancies.map(vacancy => (
                    <VacancyItem key={vacancy._id} vacancy={vacancy} deleteRespToVacancy={deleteRespToVacancy}/>
                ))}
                </tbody>
            </table>
        </main>
    );
};

export default Vacancies;
