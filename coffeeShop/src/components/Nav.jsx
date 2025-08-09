import React from 'react'

const Nav = () => {
  return (
    <nav className='justify-between flex items-center gap-7 lg:gap-10'>
      <ul className=' hidden sm:flex gap-7 lg:gap-10 justify-between w-full text-gray-300'>
        <li className='hover:text-white'><a href="#home">Home</a></li>
        <li className='hover:text-white'><a href="#services">Services</a></li>
        <li className='hover:text-white'><a href="#about">About</a></li>
      </ul>
        <button className='text-white border px-5 py-1 rounded cursor-pointer hover:bg-amber-950' href="#order">Login</button>
    </nav>
  )
}

export default Nav
