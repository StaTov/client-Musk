import { createSlice } from "@reduxjs/toolkit";


export const sidebarSlice = createSlice({
    name: 'sideBar',
    initialState: true,
    reducers: {
        tooggle: state => !state 
    }
})

export const {tooggle} = sidebarSlice.actions;

export default sidebarSlice.reducer