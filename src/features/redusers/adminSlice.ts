import { Action, ThunkAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import adminService from '../../services/adminService'
import axios from 'axios'
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
        toLogin: (state) => { state.login = true },
        toLogout: (state) => { state.login = false },
    }
})

export const { toLogin, toLogout } = adminSlice.actions

export const loginAdmin = (obj: Admin): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            const result = await adminService.loginAdmin(obj);
            if (result)
                localStorage.setItem('MUSK-AUTH', JSON.stringify(result))
                console.log('FGF', localStorage.getItem('MUSK-AUTH'))
            dispatch(toLogin())
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

export const logoutAdmin = (): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            await adminService.logoutAdmin();
            localStorage.removeItem('MUSK-AUTH')
            dispatch(toLogout())
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