import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './features/redusers/adminSlice'
import benefitsReducer from './features/redusers/BenefitsBlockSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    benefits: benefitsReducer,  
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch