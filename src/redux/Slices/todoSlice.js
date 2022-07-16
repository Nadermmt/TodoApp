import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, action) => {
            state.list.push({
                ...action.payload,
                id: Date.now().toString(),
                createdDate: Date.now().toString()
            });
        },
        editItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index] = action.payload;
        },
        deleteItem: (state, action) => {
            state.list.splice(action.payload, 1);
        }
    }
})

export const { addItem, editItem, deleteItem } = todoSlice.actions

export default todoSlice.reducer
