import React from 'react'
import Project from './Project'

const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-primary section'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center text-center md:text-start'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-60 before:-top-[2rem] lg:before:-left-[50%] md:before:-left-[99%] before:-left-[90%]'>My Larest Project</h2>
          <p className='subtitle text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad reiciendis, asperiores excepturi ex quod doloribus sit voluptates itaque porro eum.</p>
        </div>
        <Project/>
      </div>
    </section>
  )
}

export default Portfolio
