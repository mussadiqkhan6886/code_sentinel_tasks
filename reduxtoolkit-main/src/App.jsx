import React from 'react'
import AddTodo from './components/AddtoDo'
import Todos from "./components/Todos"

const App = () => {
  return (
    <div className='bg-black text-white h-dvh text-center pt-5 px-50'>
     <Todos />
     <hr />
     <AddTodo /> 
    </div>
  )
}

export default App
