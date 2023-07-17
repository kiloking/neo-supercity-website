import React from 'react'

function Section03() {

  return (
    <div     
      className='w-full py-5 md:py-24  bg-cover bgcenter bg-no-repeat relative '
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='flex flex-col md:flex-row justify-center items-center w-full'>

        <div className='w-10/12 my-5 md:my-0 md:w-1/2 order-2 md:order-1'>
          <img src={process.env.PUBLIC_URL+'/images/section03_p01.png'} alt="" className='max-w-full' />
        </div>
        <div className='md:w-1/2 px-20 md:px-32 order-1 md:order-2'>
          <img src={process.env.PUBLIC_URL+'/images/section03_title.png'} alt="" className='max-w-full' />
        </div>
      </div>
    </div>
  )
}

export default Section03