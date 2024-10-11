import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo:{
           reducer(state, action) {
            state.push(action.payload);
           },
           prepare(text){
            return {
                payload:{
                    id: nanoid(),
                    text,
                    completed: false,
                },
            };
           }
        },

        deleteTodo:{
            reducer(state, action){
                return state.filter((todo) => todo.id !== action.payload);            }
        },
    }
});


export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;