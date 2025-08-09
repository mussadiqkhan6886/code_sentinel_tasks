import React from 'react'
import aboutCoffee from "../assets/aboutCoffee.png"

const About = () => {
  return (
    <section id='about' className='flex md:flex-row flex-col items-center p-5'>
        <div className='w-full flex  justify-center'>
            <img className='w-[300px] md:w-[400px] lg:w-[500px] spin' src={aboutCoffee} alt="coffee white" />
        </div>
      <div>
        <div>
        <h4 className='font-bold text-xl lg:text-5xl mb-2'>Premium Blend Coffee</h4>
        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aspernatur odit aut vero quisquam, nulla, tempora possimus maxime </p>
      </div>
      <div className='flex mt-5'>
        <div className='w-[45%] border-r mt-1'>
            <p data-aos="fade-up" data-aos-delay={200} className='font-medium mb-4'>Premium Coffee</p>
            <p data-aos="fade-up" data-aos-delay={300} className='font-medium mb-4'>Hot Coffee</p>
            <p data-aos="fade-up" data-aos-delay={400} className='font-medium mb-4'>Cold Coffee</p>
        </div>
        
        <div data-aos="fade-left" data-aos-delay={200} className='w-[50%] pl-4'>
            <h5 className='font-bold text-xl'>Tea Lover</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nihil natus est aliquam</p>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default About
