import React from 'react'
import Button from '../components/Button'
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <main id='home' className='bg-amber-950 pt-6 pb-4 p-1 flex flex-col gap-10 items-center  md:flex-row-reverse'>
      <div className='flex flex-col items-center md:w-[50%] relative'>
        <div className='pr-[160px]'>
            <Button title={"Hey Coder"} />
        </div>
        <img className='w-[320px] lg:w-[400px] spin' src={hero} alt="cup image" />
        <div className='pl-[160px]'>
            <Button title={"Best Coffee"}/>
        </div> 
      </div>
      <div className='md:w-[50%] flex flex-col md:p-10 items-center md:items-start  gap-7'>
        <h2 className='text-white lg:text-7xl md:text-start font-bold text-6xl text-center'>We serve the richest <span className='text-amber-600'>Coffee </span>in the city</h2>
        <Button title={"Coffee And Code"}/>
      </div>
    </main>
  )
}

export default Hero
