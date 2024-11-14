import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {loadVacancy, updateVacancy} from "../store/actions/vacancyActions";
import InputContainer from "../components/UI/InputContainer";
import Select from "../components/UI/Select";
import {getStatusColor} from "../utils/getStatusColor";

const Vacancy = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {vacancy, status} = useAppSelector(state => state.vacancyReducer);
    const {token} = useAppSelector(state => state.authReducer);

    useEffect(() => {
        if (token && id) dispatch(loadVacancy(token, id))
    }, [token])


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (token && vacancy) dispatch(updateVacancy(token, vacancy._id, {[e.target.name]: e.target.value}))
    }


    const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (token && vacancy) dispatch(updateVacancy(token, vacancy._id, {[e.target.name]: e.target.value}))
    }


    return (
        <div className={'w-full flex flex-col px-32 py-16 '}>
            <div className="w-full flex mb-6">
                <Link className="ml-2 font-semibold text-accent-200 hover:text-accent-100" to={'/vacancies'}>Вернутся к списку откликов</Link>
            </div>
            <h1 className="text-black text-7xl text-center text-text-200">Отклик на вакансию</h1>
            {vacancy && (
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg lg:max-w-4xl ">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-text-200">
                            Редактирование отклика на вакансию
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg lg:max-w-4xl">
                        <InputContainer id={'company'} label={'Компания'} name={'company'} type={'text'}
                                        changeHandler={changeHandler} isTextArea={false}
                                        required={true} value={vacancy.company}/>
                        <InputContainer id={'vacancy'} label={'Вакансия'} name={'vacancy'} type={'text'}
                                        changeHandler={changeHandler} isTextArea={true}
                                        required={true} value={vacancy.vacancy}/>
                        <InputContainer id={'salary'} label={'Зарплатная вилка'} name={'salary'} type={'text'}
                                        changeHandler={changeHandler} isTextArea={false}
                                        required={false} value={vacancy.salary}/>
                        <Select id={'status'} required={true}
                                label={'Статус отклика'}
                                value={vacancy.status}
                                changeHandler={changeSelectHandler}
                                optionsArray={status ? status : []}
                                selectStyle={{
                                    background: getStatusColor(vacancy.status, status ? status : []),
                                }}/>
                        <InputContainer id={'note'} label={'Заметка'} name={'note'} type={'text'}
                                        changeHandler={changeHandler} isTextArea={true}
                                        required={false} value={vacancy.note}/>
                    </div>
                </div>)}
        </div>
    );
};

export default Vacancy;
