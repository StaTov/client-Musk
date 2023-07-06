import { createSlice } from '@reduxjs/toolkit'


export interface IsAdmin {
    value: boolean
}

const initialState: IsAdmin = {
    value: false
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        yes: (state) => { state.value = true },
        no: (state) => { state.value = false },
    }
})

export const { yes, no } = adminSlice.actions

export default adminSlice.reducer