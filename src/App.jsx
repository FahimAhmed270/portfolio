import React from 'react'
import About from './component/About'
import Brands from './component/Brands'
import Header from './component/Header'
import Hero from './component/Hero'
import Portfolio from './component/Portfolio'
import Skill from './component/Skill'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <About/>
      <Skill/>
      <Portfolio/>
      <div className='h-[2000px]'></div>
    </>
  )
}

export default App
