import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.svg'
import {navigation} from '../data'
import {Link} from 'react-scroll'

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
          <img src={logo} alt="" />
        </a>
        {/* navbar design */}
        <nav className='hidden lg:flex'>
        <ul className='flex capitalize gap-x-8 text-[15px]'>
        {navigation.map((item, id)=>{
          const {name, href} = item
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
        social icon
        </div>
        {/* mobile navbar design */}
        <div className='lg:hidden '>
        mobile navbar
        </div>
      </div>
    </header>
  )
}

export default Header
