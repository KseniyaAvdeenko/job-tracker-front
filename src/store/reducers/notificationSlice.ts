import {INotificationsInitialState} from "../../interface/IinitialState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: INotificationsInitialState ={
    error: '',
    message: ''
}

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        setSuccessMessage(state, action: PayloadAction<string>){
            state.message = action.payload
        },
        clearError(state){
            state.error=''
        },
        clearMessage(state){
            state.message=''
        }
    }
})

export default notificationSlice.reducer