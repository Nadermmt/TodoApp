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
                createdDate: Date.now()
            });
        },
        editItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index] = action.payload;
        },
        deleteItem: (state, action) => {
            state.list.splice(action.payload, 1);
        },
        duplicateItem: (state, action) => {
            state.list.push({
                ...action.payload,
                id: Date.now().toString(),
                createdDate: Date.now()
            });
        },
        completeItem: (state, action) => {
            const item = state.list[action.payload];
            state.list[action.payload] = {
                ...item,
                completedDate: item.isCompleted ? null : Date.now(),
                isCompleted: !item.isCompleted
            };
        },
        changePriority: (state, action) => {
            const item = state.list[action.payload];
            if (item.isImportant) {
                state.list[action.payload] = {
                    ...item,
                    isImportant: !item.isImportant
                };
                state.list.sort((a, b) => Number(b.isImportant) - Number(a.isImportant));
            } else {
                state.list.splice(action.payload, 1);
                state.list.splice(0, 0, {
                    ...item,
                    isImportant: !item.isImportant
                });
            }
        },
        clearList: (state) => {
            state.list = [];
        }
    }
})

export const { addItem, editItem, deleteItem, completeItem, changePriority, duplicateItem, clearList } = todoSlice.actions

export default todoSlice.reducer
