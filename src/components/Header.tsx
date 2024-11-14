import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {logoutUser} from "../store/actions/authActions";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const {isAuth, token, currentUser} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch()

    function logout() {
        if (token) {
            dispatch(logoutUser(token))
            navigate('/')
        }
    }


    return (
        <header className="flex px-32 w-full">
            <div
                className="flex flex-wrap items-center justify-end py-8 w-full border-b border-bg-300">
                {isAuth
                    ? <div className="flex items-center">
                        {currentUser && (
                            <Link to={'/vacancies'}
                                  className="mr-8 text-2xl font-semibold  text-accent-200 hover:text-accent-100">
                                {currentUser.username}
                            </Link>)}
                        <button type="button" onClick={logout}
                                className="font-bold rounded-2xl px-5 py-4 text-2xl bg-accent-200 hover:bg-accent-100 text-bg-100 flex items-center justify-center">
                            Logout
                        </button>
                    </div>
                    : <div className="flex">
                        <Link to={'/login'}
                              className="font-bold rounded-2xl px-5 py-4 text-2xl bg-accent-200 hover:bg-accent-100 text-bg-100 flex items-center justify-center me-2">Войти
                        </Link>
                        <Link to={'/signup'}
                              className="font-bold rounded-2xl px-5 py-4 text-2xl bg-accent-200 hover:bg-accent-100 text-bg-100 flex items-center justify-center">Создать
                            аккаунт
                        </Link>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;
