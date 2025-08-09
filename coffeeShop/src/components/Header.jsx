import React from 'react'
import coffeeLogo from "../assets/coffeeLogo.png"
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full p-3 px-6 md:px-10 lg:px-14 bg-amber-900'>
      <div className='flex items-center gap-2'>
        <img className='w-[40px]' src={coffeeLogo} alt="logo" />
        <h1 className='text-xl text-white font-medium'>Coffee Cafe</h1>
      </div>
      <Nav />
    </header>
  )
}

export default Header
