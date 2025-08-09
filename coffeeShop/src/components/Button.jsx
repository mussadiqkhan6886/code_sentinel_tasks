import React from 'react'

const Button = ({title}) => {
  return (
    <button className='p-2 transition-all duration-300 cursor-pointer hover:scale-105 text-white rounded-xl gradient'>
      {title}
    </button>
  )
}

export default Button
