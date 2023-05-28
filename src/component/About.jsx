import React from 'react'
import image from '../assets/img/about.webp'

const About = () => {
  return (
   <section id='about' className='section bg-secondary'>
     <div className="container mx-auto">
       <div className="flex flex-wrap gap-20">
        <img src={image} alt="image-person" className='object-cover h-full w-[550px] rounded-2xl '/>
        <div className='flex flex-col items-start text-left p-4 lg:p-0'>
          <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[1.7rem]'>Fahim Ahmed</h2>
          <p className='text-accent text-xl pt-2'>Freelancer Frond-end Developer</p>
          <hr className='bg-accent'/>
          <p className='max-w-[500px] pt-[50px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia necessitatibus labore! Mollitia, aspernatur distinctio. Architecto et quae quibusdam esse.</p>
          <button className='btn btn-lg bg-accent hover:bg-accent-hover mt-[30px]'>Contact Now</button>
        </div>
       </div>
     </div>
   </section>
  )
}

export default About


