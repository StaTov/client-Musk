import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Value {
    stringOne: string;
    stringTwo: string;
    number: number;
}

export interface BenefitsBlock {
    value: Value[]
}

const initialState: BenefitsBlock = {
    value: [{
        stringOne: 'Мы',
        stringTwo: 'на рынке',
        number: 1
    }]
}

export const BenefitsSlice = createSlice({
    name: 'benefits',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<Value>) => { state.value.concat(action.payload) },
        deleteOne: (state, action: PayloadAction<string>) => { state.value.filter(e => e.stringOne !== action.payload) }
    }
})

export const { create, deleteOne } = BenefitsSlice.actions

export default BenefitsSlice.reducer