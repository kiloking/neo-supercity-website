import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06() {
  const imgs =[
    {image:"section06_p01.png"},
    {image:"section06_p02.png"},
    {image:"section06_p03.png"},
  ]
  return (
    <div className='bg-[#0992A0] w-full  relative '>
      <div className='flex flex-col md:flex-row py-10 md:py-20 items-center justify-between'>
        <div className='md:w-1/2 px-5 md:px-24'>
          <img src={process.env.PUBLIC_URL+'/images/section06_title.png'} alt="" />
          <div className=' pr-8 pt-5'>
            <img src={process.env.PUBLIC_URL+'/images/section06_d01.png'} alt="" />
          </div>

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
          <div className='w-1/2 py-4'>
            <img src={process.env.PUBLIC_URL+'/images/section06_subtitle.png'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section06