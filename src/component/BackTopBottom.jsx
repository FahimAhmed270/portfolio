import React, { useEffect, useState } from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import {BsArrowUp} from 'react-icons/bs'

const BackTopBottom = () => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            return window.scrollY > 200 ? setShow(true) : setShow(false)
        })
    })

    const scrollToTop =()=>{
        scroll.scrollToTop()
    }
  return (
        show && (
            <button onClick={()=> scrollToTop()} className='bg-accent w-12 h-12 flex items-center justify-center fixed right-10 bottom-10 rounded-full text-white hover:bg-accent-hover'>
                <BsArrowUp className='w-6 h-6'/>
            </button>
        )
  )
}

export default BackTopBottom
