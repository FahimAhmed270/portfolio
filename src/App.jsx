import React from 'react'
import About from './component/About'
import Brands from './component/Brands'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Header from './component/Header'
import Hero from './component/Hero'
import Portfolio from './component/Portfolio'
import Services from './component/Services'
import Skill from './component/Skill'
import Testimonial from './component/Testimonial'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <div className='h-[2000px]'></div>
    </>
  )
}

export default App
