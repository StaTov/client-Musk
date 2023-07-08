import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './features/redusers/adminSlice'
import benefitsReducer from './features/redusers/BenefitsBlockSlice'
import  NoteReducer from './features/redusers/NoteSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    benefits: benefitsReducer,  
    note: NoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch