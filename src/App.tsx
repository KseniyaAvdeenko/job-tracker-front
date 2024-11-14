import React, {useEffect, useState} from 'react';
import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {loadCurrentUser, loggedIn} from "./store/actions/authActions";
import {loadVacancies, loadVacancyStatus} from "./store/actions/vacancyActions";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Vacancies from "./pages/Vacancies";
import Vacancy from "./pages/Vacancy";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import {notificationSlice} from "./store/reducers/notificationSlice";
import Modal from "./components/Modal";


function App() {
    const {token, currentUser} = useAppSelector(state => state.authReducer);
    const {error, message} = useAppSelector(state => state.notificationReducer)
    const [errors, setErrors] = useState<string[]>([])
    const [successMessages, setSuccessMessages] = useState<string[]>([])
    const dispatch = useAppDispatch();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)


    useEffect(() => {
        dispatch(loadVacancyStatus())
        if (token) {
            dispatch(loggedIn(token))
            dispatch(loadCurrentUser(token))
            dispatch(loadVacancies(token))
        }
    }, [token])

    useEffect(() => {
        if (error) setErrors([...errors, error])
        if (message) setSuccessMessages([...successMessages, message])
    }, [error, message]);

    useEffect(() => {
        if (errors.length) setTimeout(() => {
            setErrors([]);
            dispatch(notificationSlice.actions.clearError())
        }, 7000)
        if (successMessages.length) setTimeout(() => {
            setSuccessMessages([])
        }, 9000)
    }, [errors.length, successMessages.length]);

    return (
        <BrowserRouter>
            <div className={'w-full h-full relative'}>
                {currentUser && token && (<Modal token={token} isOpen={isOpenModal} setIsOpen={setIsOpenModal} currentUser={currentUser}/>)}
                <Header/>
                <Routes>
                    <Route path={'/vacancies'} element={<Vacancies setIsOpenModal={setIsOpenModal}/>}/>
                    <Route path={'/vacancies/:id'} element={<Vacancy/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/signup/'} element={<SignUp/>}/>
                    <Route path={'/login/'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
                <div className="absolute left-4 bottom-4">
                    {errors.map((error, i) => (
                        <div key={i} className={'rounded-md p-3 text-text-200 my-3'}
                             style={{background: 'rgba(255, 0, 0, 0.25)'}}>{error}</div>
                    ))}
                    {successMessages.map((message, i) => (
                        <div key={i} className={'rounded-md p-3 text-text-200 my-3'}
                             style={{background: 'rgba(0, 255, 9, 0.25)'}}>{message}</div>
                    ))}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
