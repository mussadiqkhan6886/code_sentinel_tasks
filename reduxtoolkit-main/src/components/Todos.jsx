import React, { use } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

function Todos() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center mb-3 h-10 gap-3 px-10'>
      <input type="text" placeholder='Enter todo' value={input} onChange={e => setInput(e.target.value)} className='bg-gray-700 border px-3 outline-none w-full'/>
      <button type='submit' className='border px-6 cursor-pointer hover:bg-green-700'>Add</button>
    </form>
  )
}

export default Todos
