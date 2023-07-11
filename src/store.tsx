import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './features/redusers/adminSlice'
import benefitsReducer from './features/redusers/benefitsSlice'
import  NoteReducer from './features/redusers/noteSlice';
import sidebarReducer from './features/redusers/sidebarSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    benefits: benefitsReducer,  
    note: NoteReducer,
    sideBar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch