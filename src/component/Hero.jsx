import React from 'react'
import woman from '../assets/img/banner-woman2.webp'


const Hero = () => {
  return (
    <section className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-no-repeat lg:bg-center py-32 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className='flex items-center'>
          {/* left side */}
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <p className='text-lg text-accent mb-[22px] dark:text-[#000]'>Hey, I'm Fahim Ahmed</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg;leading-[1.2] font-bold md:tracking-[-2px] dark:text-[#000]'>I Build & Design <br /> Web Interfaces</h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa temporibus</p>
            <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Work with Me</button>
          </div>
          {/* right side */}
          <div className='hidden lg:flex flex-1 justify-end items-end'>
            <img src={woman} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
