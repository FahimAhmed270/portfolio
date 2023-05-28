import React from 'react'
import { online } from '../data'
import logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 items-center justify-between'>
          {/* social link */}
          <div className='flex gap-x-6 items-center'>
            {online.map((item, id) => {
              const { icon, href } = item
              return (
                <a className='text-[25px] text-accent' href={href} key={id}>
                  {icon}
                </a>
              )
            })}
          </div>
          {/* logo */}
          <div>
            <img src={logo} alt="" className='w-[200px] md:w-[150px]' />
          </div>
          {/* copyright */}
          <p>&copy; 2023 Fahim Ahmed | All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
