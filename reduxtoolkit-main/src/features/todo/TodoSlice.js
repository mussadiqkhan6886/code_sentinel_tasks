import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, text: "Complete Internship tasks"},
        {id: 2, text: "Complete Three.js"},
        {id: 3, text: "Fix bugs in project"},
        {id: 4, text: "Take Break"},

    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer