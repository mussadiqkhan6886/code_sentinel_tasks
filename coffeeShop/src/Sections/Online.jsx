import React from 'react'
import onlineImage from "../assets/onlineImage.jpg"
import OnlineButton from '../components/OnlineButton'

const Online = () => {
  return (
    <section className='mb-3 p-10 bg-center bg-cover' style={{ backgroundImage: `url(${onlineImage})` }}>
      <div data-aos="fade-up" data-aos-delay={300} className='flex flex-col items-start md:px-20 md:py-10'>
        <p className='text-2xl md:text-4xl mb-6 font-bold text-center text-white'>Coffee Cafe is available for Android and iOS</p>
        <div className='flex gap-5'>
            <OnlineButton heading={"GET IT ON"} title={"Google Play"} />
            <OnlineButton heading={"Download on the"} title={"Apple Store"} />
        </div>
      </div>
    </section>
  )
}

export default Online
