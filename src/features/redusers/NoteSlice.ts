import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface Note {
    show: boolean,
    type: 'string'
    message: 'string'
}

const initialState = {
    show: false,
    message: '',
    type: 'info',
};

export const NoteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        showNote: (_state, action: PayloadAction<string>) => {return { message: action.payload, show: true, type: 'success' }},
        showError: (_state, action: PayloadAction<string>) => {return { message: action.payload, show: true, type: 'error' }},
        hideNote: (state) => {return state = {...state, message: '', show: false}}
    }
})

export const {showError, showNote, hideNote} = NoteSlice.actions;

export default NoteSlice.reducer