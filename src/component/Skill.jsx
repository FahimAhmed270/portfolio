import React from 'react'
import { skills } from '../data'

const Skill = () => {
  return (
   <section className='bg-tertiary py-12'>
       <div className="container mx-auto">
           <div className='flex flex-wrap items-center justify-between gap-5'>
               {skills.map((item,id)=>{
                   const {image} = item
                   return (
                       <div key={id}>
                           <img src={image} alt="" />
                       </div>
                   )
               })}
           </div>
       </div>
   </section>
  )
}

export default Skill
