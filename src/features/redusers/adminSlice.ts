import { Action, ThunkAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import adminService from '../../services/adminService'
import axios, { AxiosError } from 'axios'
import { showError } from './NoteSlice'

export interface IsAdmin {
    login: boolean
}

export interface Admin {
    email: string,
    password: string,
}

const initialState: IsAdmin = {
    login: false
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        yes: (state) => { state.login = true },
        no: (state) => { state.login = false },
    }
})

export const { yes, no } = adminSlice.actions

export const loginAdmin = (obj: Admin): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            const result = await adminService.login(obj);
            if (result)
                dispatch(yes())
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                console.error(err.response?.data.error);
                dispatch(showError(err.response.data.error));
                
            } else 
            if (err instanceof Error) {
                dispatch(showError(err.message))
            } 
        }
    }
}

export default adminSlice.reducer