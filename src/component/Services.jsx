import React from 'react'
import { services } from '../data'

const Services = () => {
    return (
        <section id="services" className="section bg-tertiary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className='section-title before:content-services relative before:absolute before:opacity-60 before:-top-[2rem] lg:before:-left-[20%] md:before:-left-[80%] before:-left-[60%]'>What I do for clients</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem error quo, culpa accusantium officiis voluptatum expedita voluptatibus tempora dolor.</p>
                </div>
                {/* grid column step */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 p-6'>
                    {services.map((item, id) => {
                        const { icon, name, description } = item
                        return (
                            <div key={id} className='bg-secondary p-6 rounded-xl group hover:bg-white transition-all duration-200'>
                                <div className='text-accent rounded-sm justify-center items-center mb-10 text-[28px] group-hover:text-black'>
                                    {icon}
                                </div>
                                <h4 className='text-xl font-medium mb-4 group-hover:text-black'>{name}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
