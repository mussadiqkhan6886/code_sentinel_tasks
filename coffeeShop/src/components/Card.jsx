import React, { useState } from 'react'
import servicePic from "../assets/servicePic.png"

const Card = ({service}) => {
  const [active, setActive] = useState(false)
  return (
    <article data-aos="fade-up" data-aos-delay={service.delay} className={`bg-white md:justify-center rounded-2xl shadow-2xl p-3 pb-5 flex flex-col items-center text-center w-[300px] cursor-pointer group hover:bg-amber-800 duration-200`}>
      <img className='w-[200px] lg:w-[250px] group-hover:scale-105 group-hover:rotate-5 duration-200 ' src={servicePic} alt="image" />
      <h3 className='font-medium text-2xl group-hover:text-white mb-1'>{service.title}</h3>
      <p className='group-hover:text-white line-clamp-2'>{service.about}</p>
    </article>
  )
}

export default Card
