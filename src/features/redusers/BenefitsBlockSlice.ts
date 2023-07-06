import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BenefitsValue {
    id: string,
    stringOne: string;
    stringTwo: string;
    number: number;
}

export interface BenefitsBlock {
    value: BenefitsValue[]
}

const initialState: BenefitsBlock = {
    value: [{
        id: '123',
        stringOne: 'Мы',
        stringTwo: 'на рынке',
        number: 1
    }]
}

export const BenefitsSlice = createSlice({
    name: 'benefits',
    initialState,
    reducers: {
        initialBenefits: (state, action: PayloadAction<Array<BenefitsValue>>) => { state.value = action.payload },
        createBenefit: (state, action: PayloadAction<BenefitsValue>) => { state.value.concat(action.payload) },
        deleteBenefit: (state, action: PayloadAction<string>) => { state.value.filter(e => e.stringOne !== action.payload) }
    }
})

export const { createBenefit, deleteBenefit, initialBenefits } = BenefitsSlice.actions

export default BenefitsSlice.reducer