import { Action, createSlice, ThunkAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import benefitsService from '../../services/benefitsService';
import { RootState } from '../../store';
import axios from 'axios';
import { showError, showNote } from './noteSlice';


export interface BenefitsValue {
    _id: string,
    stringOne: string;
    stringTwo: string;
    number: string;
}
export type BenefitNoId = Omit<BenefitsValue, '_id'>

const initialState = [] as BenefitsValue[]


export const BenefitsSlice = createSlice({
    name: 'benefits',
    initialState,
    reducers: {
        setBenefits: (_state, action: PayloadAction<Array<BenefitsValue>>) => action.payload,
        appendBenefit: (state, action: PayloadAction<BenefitsValue>) => state.concat(action.payload),
        deleteBenefit: (state, action: PayloadAction<string>) => state.filter(e => e._id !== action.payload)
    }
})

export const { appendBenefit, deleteBenefit, setBenefits } = BenefitsSlice.actions


export const initializeBenefits = (): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            const benefits = await benefitsService.getAll();
            dispatch(setBenefits(benefits))
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

export const createBenefit = (obj: BenefitNoId): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            const newBenefit = await benefitsService.create(obj);
            dispatch(appendBenefit(newBenefit))
            dispatch(showNote('успешно создано'))
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

export const removeBenefit = (id: string): ThunkAction<void, RootState, unknown, Action<unknown>> => {
    return async (dispatch) => {
        try {
            await benefitsService.remove(id);
            dispatch(deleteBenefit(id))
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


export default BenefitsSlice.reducer