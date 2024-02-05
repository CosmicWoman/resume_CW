import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../../components/changeTheme/changeTheme'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})