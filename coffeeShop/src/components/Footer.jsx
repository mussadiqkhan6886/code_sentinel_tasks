import React from 'react'
import {footer} from "../Constants/index"
import footerImage from "../assets/footerImage.jpg"

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerImage})` }} className="bg-cover  text-white flex flex-col justify-around lg:flex-row p-5 lg:pt-10">
      <div className='md:w-[40%]'>
        <h1 className='text-2xl font-bold mb-2'>Coffee Cafe</h1>
        <p className='text-gray-300 mb-2'>Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect Espresso Escape</p>
        <button className='bg-amber-950 text-[13px] cursor-pointer p-1 px-3 rounded-xl'>Visit our Youtube Channel</button>
      </div>
      <div className='grid grid-cols-2 my-5 gap-5 md:grid-cols-3'>
        {footer.map(links => (
            <div key={links.id} className='mb-6'>
                <h2 className='font-bold text-xl'>{links.title}</h2>
                <div className='flex flex-col gap-2 mt-3'>
                {links.links.map((link, index) => (
                    <a key={index} href={link.link}>{link.name}</a>
                ))}
                </div>
            </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
