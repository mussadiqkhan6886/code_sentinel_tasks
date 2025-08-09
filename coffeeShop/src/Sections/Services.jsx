import React from 'react'
import {services} from "../Constants/index"
import Card from '../components/Card'

const Services = () => {
  return (
    <section id='services' className='bg-gray-100 pb-4'>
      <h2 className='text-3xl font-bold text-center m-4 mb-6'>Best Coffee For You</h2>
        <div className='grid content-center md:grid-cols-2 lg:grid-cols-3 md:items-center  lg:px-10 justify-center items-center gap-5 place-items-center'>
            {services.map((service => (
                <Card key={service.id} service={service} />
            )))}
        </div>
    </section>
  )
}

export default Services
