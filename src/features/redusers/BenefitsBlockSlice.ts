import { Action, createSlice, ThunkAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import benefitsService from '../../services/benefitsService';
import { RootState } from '../../store';


export interface BenefitsValue {
    _id: string,
    stringOne: string;
    stringTwo: string;
    number: number;
}


const initialState = [] as BenefitsValue[]


export const BenefitsSlice = createSlice({
    name: 'benefits',
    initialState,
    reducers: {
        setBenefits: (_state, action: PayloadAction<Array<BenefitsValue>>) => action.payload,
        appendBenefit: (state, action: PayloadAction<BenefitsValue>) => state.concat(action.payload),
        deleteBenefit: (state, action: PayloadAction<string>) => state.filter(e => e.stringOne !== action.payload)
    }
})

export const { appendBenefit, deleteBenefit, setBenefits } = BenefitsSlice.actions


export const initializeBenefits = (): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        const benefits = await benefitsService.getAll();
        dispatch(setBenefits(benefits))
    }
}

export default BenefitsSlice.reducer