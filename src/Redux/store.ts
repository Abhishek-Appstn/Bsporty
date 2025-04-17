import { configureStore } from '@reduxjs/toolkit'
import { setLanguage } from './Slices/languageSlice'
import rootReducer from './reducers'

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch