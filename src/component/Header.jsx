import React, { useEffect, useState } from 'react'
import logo from '../assets/img/1.png'
import { navigation, social } from '../data'
import { Link } from 'react-scroll'
import NavMobile from './NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full z-10 text-white transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <img src={logo} alt="" className='w-[200px] pt-3'/>
        </a>
        {/* navbar design */}
        <nav className='hidden lg:flex'>
          <ul className='flex capitalize gap-x-8 text-[17px]'>
            {navigation.map((item, id) => {
              const { name, href } = item
              return (
                <li key={id} className='text-white hover:text-accent cursor-pointer'>
                  <Link to={href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* social icon */}
        <div className='hidden lg:flex'>
          <ul className='flex gap-x-5'>
            {social.map((social, i) => {
              const { icon, href } = social;
              return (
                <li key={i} className='flex justify-center items-center text-accent'>
                  <a href={href} className='text-xl'>
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* mobile navbar design */}
        <div className='lg:hidden '>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
