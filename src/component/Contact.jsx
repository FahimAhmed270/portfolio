import React from 'react'
import { contact } from '../data'

const Contact = () => {
    return (
        <section className='section bg-primary' id='contact'>
            <div className="container mx-auto">
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-contact relative before:absolute before:opacity-60 before:-top-[2rem] lg:before:-left-[20%] md:before:-left-[80%] before:-left-[60%]'>What Other People Say</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quia quo ut amet quaerat nulla facilis fugit iste sed vel.</p>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-x-8 p-5 lg:p-0'>
                    {/* information */}
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mt-12'>
                        {contact.map((item, id) => {
                            const { icon, title, subtitle, description } = item
                            return (
                                <div key={id} className='flex flex-col items-start lg:flex-row lg:gap-x-8 md:items-start p-4 lg:p-0'>
                                    <div className='text-accent text-[30px] mb-5'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='text-body text-xl mb-2'>{title}</h4>
                                        <p>{subtitle}</p>
                                        <p className='text-accent'>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* form design */}
                    <form action="" className='space-y-8 w-full max-w-[780px]'>
                        <div className='flex gap-8'>
                            <input className='input' type="text" placeholder='Your Name'/>
                            <input className='input' type="email" placeholder='Your Email'/>
                        </div>
                        <input className='input' type="email" placeholder='Subject'/>
                        <textarea className='textarea' placeholder='Your Messages'></textarea>
                        <button className='btn btn-lg bg-accent hover:bg-accent-hover'>Send Me</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
