import React, {useEffect, useState} from 'react';
import InputContainer from "../components/UI/InputContainer";
import Form from "../components/UI/Form";
import {IUserBase} from "../interface/IUser";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {signup} from "../store/actions/authActions";
import {Base64} from "js-base64";
import {useAppSelector} from "../hooks/useAppSelector";


const SignUp = () => {
    const {signedUp} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch()
    const [newUser, setNewUser] = useState<IUserBase>({username: '', password:'', email: ''})

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user:IUserBase = structuredClone(newUser);
        user.password = Base64.encode(user.password)
        dispatch(signup(user))
        setNewUser({username: '', password:'', email: ''})
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    useEffect(()=>{if(signedUp) window.location.replace('/login')},[signedUp])


    return (
        <main className={'w-full p-32'}>
            <Form submitHandler={submitHandler}
                  buttonName={'Создать'}
                  formName={'Создать аккаунт'}
                  additionalInfo={{text: 'Уже есть аккаунт', linkName: 'Войти', linkPath: '/login'}}
            >
                <InputContainer
                    isTextArea={false}
                    value={newUser.username}
                    id={'username'}
                    label={'Имя пользователя'}
                    name={'username'}
                    type={'text'} changeHandler={changeHandler}
                    required={true}
                />
                <InputContainer
                    isTextArea={false}
                    value={newUser.email}
                    id={'email'}
                    label={'Email'}
                    name={'email'}
                    type={'email'} changeHandler={changeHandler}
                    required={true}
                />
                <InputContainer
                    isTextArea={false}
                    value={newUser.password}
                    id={'password'}
                    label={'Пароль'}
                    name={'password'}
                    type={'password'} changeHandler={changeHandler}
                    required={true}
                />
            </Form>
        </main>
    );
};

export default SignUp;
