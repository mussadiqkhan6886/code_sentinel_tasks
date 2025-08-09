import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'

const AddTodo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div className='text-2x p-2 bg-gradient-to-l from-gray-600 to-gray-800'>Todos</div>
    <hr />
      {todos.map(todo => (
        <li key={todo.id} className='flex justify-between px-5 m-auto border-b border-b-white items-center py-3'>
             <div className='text-start'>{todo.text}</div>
            <button className='bg-gray-800 px-8 py-2 hover:bg-red-700 cursor-pointer' onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </>
  )
}

export default AddTodo
 