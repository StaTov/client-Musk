import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './features/redusers/adminSlice'

export const store = configureStore({
  reducer: {admin: adminReducer },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch