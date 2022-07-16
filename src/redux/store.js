import { configureStore } from '@reduxjs/toolkit'
import {todoReducer} from './Slices';

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})