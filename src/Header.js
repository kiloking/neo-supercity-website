import React from 'react'

function Header() {
  return (
    <div 
      className=' relative'
    >
      <img src={process.env.PUBLIC_URL+'/images/header_bg.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-[20%] right-14 w-4/12 '>
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='w-[75%] mx-auto' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"/>
        <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='my-4' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"/>
      </div>
    </div>
  )
}

export default Header