import React, { useState } from 'react'
import { navigation } from '../data'
// icon
import { HiOutlineX, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


const NavMobile = () => {
  const [open, setOpen] = useState(false)

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      }
    }
  }

  const uiVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  }

  return (
    <nav className='relative'>
      <div className='cursor-pointer text-white' onClick={() => setOpen(true)}>
        <HiOutlineMenuAlt3 className='w-8 h-8' />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      ></motion.div>
      {/* menu ui */}
      <motion.ul
        variants={uiVariants} initial='hidden' animate={open ? 'visible' : 'hidden'}
        className={`${open ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close menu */}
        <div className='absolute cursor-pointer top-8 right-8' onClick={() => setOpen(false)}>
          <HiOutlineX className='w-8 h-8' />
        </div>
        {navigation.map((item, id) => {
          const { name, href } = item
          return (
            <li className='mb-8' key={id}>
              <Link to={href}
                smooth={true} duration={500} offset={-70}
                className='text-xl capitalize cursor-pointer'
              >{name}</Link>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default NavMobile
