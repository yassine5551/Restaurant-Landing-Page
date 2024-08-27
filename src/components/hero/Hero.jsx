import React from 'react'
import i from '../../img/hero/hero1.jpg'
const Hero = () => {
  return (
    <>
    <div  className="bg-hero1 bg-cover flex justify-center items-center h-screen">
        <div className='text-center'>
            <p className='text-[30px] sm:text-[50px]  md:text-[60px] lg:text-[80px] xl:text-[100px] font-petrona font-medium text-lightBrown'>Experience Culinary</p>
            <p className='text-[30px] sm:text-[50px]  md:text-[60px] lg:text-[80px] xl:text-[100px] font-petrona font-medium text-lightBrown'>Excellence</p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-[100px]'>
            <button className='primary-btn font-petrona'>Reserve Your Table</button>
            <button className='text-white hover:text-secondary transition-all font-semibold md:py-3 md:px-3 py-1 px-1 rounded-md font-petrona border '>Discover Our Specials</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero