import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section02() {
  const imgs =[
    {image:"section02_p01.png"},
    {image:"section02_p02.png"},
    {image:"section02_p03.png"},
  ]
  return (
    <div     
      className='w-full py-5 md:py-24  bg-cover bgcenter bg-no-repeat relative '
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='flex flex-col md:flex-row justify-center items-center w-full'>
        <div className='md:w-1/2 px-20 md:px-32 '>
          <img src={process.env.PUBLIC_URL+'/images/section02_title.png'} alt="" className='max-w-full' />
        </div>
        <div className='w-10/12 my-5 md:my-0 md:w-1/2'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }} 
            modules={[Pagination,Autoplay]}
            autoplay={{delay:2000}}
            centeredSlides={true}
            className='w-full'
          >
            {
              imgs.map((item,index)=>{
                return(
                  <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Section02