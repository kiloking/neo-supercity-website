import React from 'react'
import ReactPlayer from 'react-player'
function YtVideo() {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat relative md:py-10'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div  className='w-full md:w-2/3 mx-auto '>
        <div className=' relative pt-[56.25%]'>
          <ReactPlayer
            className=' absolute top-0 left-0'
            url='https://www.youtube.com/watch?v=tPLxyV7DJBQ'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </div>
  


  )
}

export default YtVideo