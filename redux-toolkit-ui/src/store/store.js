import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import todoSlice from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
    },
})