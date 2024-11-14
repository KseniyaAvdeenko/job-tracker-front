import React, {useState} from 'react';
import Form from "../components/UI/Form";
import InputContainer from "../components/UI/InputContainer";
import {Base64} from "js-base64";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {loginUser} from "../store/actions/authActions";
import {useAppSelector} from "../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import {IUserBase} from "../interface/IUser";

const Login = () => {
    const navigate = useNavigate();
    const {isAuth, token} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<{email:string; password: string}>({email: '', password: ''})
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const User:IUserBase = structuredClone(user);
        User.password = Base64.encode(user.password)
        dispatch(loginUser(User))
        setUser({email: '', password: ''})
    }

    const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>setUser({...user,[e.target.name]:e.target.value})

    if(isAuth)navigate('/vacancies')

    return (
        <main className={'w-full p-32'}>
            <Form submitHandler={submitHandler}
                  buttonName={'Войти'}
                  formName={'Войти'}
                  additionalInfo={{text: 'Еще нет аккаунта?', linkName: 'Создать аккаунт', linkPath: '/signup'}}
            >
                <InputContainer
                    isTextArea={false}
                    value={user.email}
                    id={'email'}
                    label={'Email'}
                    name={'email'}
                    type={'email'} changeHandler={changeHandler}
                    required={true}
                />
                <InputContainer
                    isTextArea={false}
                    value={user.password}
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

export default Login;
