import React from 'react'

function Section04() {
  return (
    <div     
      className='w-full py-10  bg-cover bgcenter bg-no-repeat relative '
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='flex  justify-center items-center py-0 relative'>
        <div className='w-10/12'>
          <img src={process.env.PUBLIC_URL+'/images/section04_p01.png'} alt="" className='my-14' data-aos="fade"  data-aos-duration="1000"/>
        </div>
      </div>
      <div className=' absolute bottom-0 right-0 w-1/3'>
        <img src={process.env.PUBLIC_URL+'/images/section04_c01.png'} alt="" className='max-w-full' data-aos="fade" data-aos-delay="800" data-aos-duration="3000"/>
      </div>
    </div>
  )
}

export default Section04