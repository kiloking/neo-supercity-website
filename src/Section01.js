import React from 'react'

function Section01() {
  return (
    <div     
      className='w-full  bg-cover bgcenter bg-no-repeat relative '
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className=' relative h-2 md:h-8 bg-[#3DABA4] top-0 z-10'></div>
      <div className='flex  justify-center items-center md:py-20  relative'>
        <div className='w-4/5'>
          <img src={process.env.PUBLIC_URL+'/images/section01_p01.png'} alt="" className='my-14' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
        </div>
        <div className=' absolute top-20 right-20 w-10 md:w-[180px]'>
          <img src={process.env.PUBLIC_URL+'/images/section01_c02.png'} alt="" className='max-w-full' data-aos="fade-down" data-aos-delay="800" data-aos-duration="3000"/>
        </div>
      </div>
      <div className=' absolute top-0 left-0 w-1/3 md:w-1/4'>
        <img src={process.env.PUBLIC_URL+'/images/section01_c01.png'} alt="" className='max-w-full' data-aos="fade" data-aos-delay="1200" data-aos-duration="1500"/>
      </div>
    </div>
  )
}

export default Section01