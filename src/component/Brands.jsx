import React from 'react'
import { brands } from '../data'

const Brands = () => {
  return (
    <section className='min-h-[140px] bg-tertiary flex items-center'>
      <div className="container mx-auto flex justify-evenly md:justify-berween items-center flex-wrap">
      {brands.map((brand,i)=>{
        const {img, href} = brand
        return(
          <div key={i}>
            <img src={img} alt="" />
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default Brands
