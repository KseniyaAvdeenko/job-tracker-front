import React, {FC, useState} from 'react';
import Form from "./UI/Form";
import InputContainer from "./UI/InputContainer";
import {IVacancyBase} from "../interface/IVacancy";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {IUser} from "../interface/IUser";
import {useAppSelector} from "../hooks/useAppSelector";
import {getStatusColor} from "../utils/getStatusColor";
import Select from "./UI/Select";
import {createVacancy} from "../store/actions/vacancyActions";


interface IModalProps {
    isOpen: boolean;
    setIsOpen: Function;
    currentUser: IUser;
    token: string
}

const Modal: FC<IModalProps> = ({isOpen, setIsOpen, currentUser, token}) => {
    const {status} = useAppSelector(state => state.vacancyReducer)
    const [newVacancy, setNewVacancy] = useState<IVacancyBase>({
        company: '',
        vacancy: '',
        status: 'Не просмотрено',
        salary: '',
        note: '',
        userId: currentUser._id
    })
    const dispatch = useAppDispatch()

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createVacancy(token, newVacancy))
        setIsOpen(false)
        setNewVacancy({
            company: '',
            vacancy: '',
            status: 'Не просмотрено',
            salary: '',
            note: '',
            userId: currentUser._id
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewVacancy({...newVacancy, [e.target.name]: e.target.value})
    }
    const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewVacancy({...newVacancy, [e.target.name]: e.target.value})
    }

    return (
        <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm z-10"
             onClick={() => setIsOpen(false)}
             style={{display: isOpen ? "flex" : 'none'}}
        >
            <div className="p-10 border border-bg-300  rounded-lg bg-bg-200" onClick={e => e.stopPropagation()}>
                <Form submitHandler={submitHandler} buttonName={'Создать'}
                      formName={'Создание нового отклика на вакансию'}>
                    <InputContainer id={'company'} label={'Компания'} name={'company'} type={'text'}
                                    changeHandler={changeHandler} isTextArea={false}
                                    required={true} value={newVacancy.company}/>
                    <InputContainer id={'vacancy'} label={'Вакансия'} name={'vacancy'} type={'text'}
                                    changeHandler={changeHandler} isTextArea={true}
                                    required={true} value={newVacancy.vacancy}/>
                    <InputContainer id={'salary'} label={'Зарплатная вилка'} name={'salary'} type={'text'}
                                    changeHandler={changeHandler} isTextArea={false}
                                    required={false} value={newVacancy.salary}/>
                    <Select id={'status'} required={true}
                            label={'Статус отклика'}
                            value={newVacancy.status}
                            changeHandler={changeSelectHandler}
                            optionsArray={status ? status : []}
                            selectStyle={{
                                background: getStatusColor(newVacancy.status, status ? status : []),
                            }}/>
                    <InputContainer id={'note'} label={'Заметка'} name={'note'} type={'text'}
                                    changeHandler={changeHandler} isTextArea={true}
                                    required={false} value={newVacancy.note}/>
                </Form>
            </div>
        </div>
    );
};

export default Modal;
