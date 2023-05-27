import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from '../data'

const Project = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [project, setProject] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProject(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      setProject(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  return (
    <div>
      {/* navbar design */}
      <nav className='max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center'>
          {projectsNav.map((nav, id) => {
            const { name } = nav
            return (
              <li key={id}
                onClick={(e) => handleClick(e, id)}
                className={`${active === id ? 'active' : ''} cursor-pointer capitalize m-4`}
              >{name}</li>
            )
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8'>
        {project.map((item)=>{
          return (
            <div key={item.id} className='flex flex-col items-center text-center mt-12'>
              <div>
                <img src={item.image} alt="" className='rounded-2xl'/>
              </div>
              <p className='capitalize text-accent text-xl mt-3'>{item.category}</p>
              <h3 className='font-semibold capitalize text-2xl mt-3'>{item.name}</h3>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Project
