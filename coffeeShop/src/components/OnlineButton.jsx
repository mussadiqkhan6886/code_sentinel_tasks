import React from 'react'

const OnlineButton = ({heading, title}) => {
  return (
    <button className='bg-black md:w-[120px] lg:w-[150px] w-[100px] h-[60px] border-white border text-white rounded'>
      <p className='text-[10px] md:text-[12px] text-nowrap text-gray-300'>{heading}</p>
      <p className='text-nowrap text-[12px] md:text-[14px] lg:text-[16px]'>{title}</p>
    </button>
  )
}

export default OnlineButton
