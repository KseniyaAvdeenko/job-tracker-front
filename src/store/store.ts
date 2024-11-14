import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import vacancyReducer from './reducers/vacancySlice';
import notificationReducer from './reducers/notificationSlice'


export const rootReducer = combineReducers({
    authReducer, vacancyReducer, notificationReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];