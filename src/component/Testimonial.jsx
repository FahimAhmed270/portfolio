import React from 'react'
import { testimonials } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../swiper.css'

const Testimonial = () => {
    return (
        <section id='testimonials' className='section bg-secondary relative'>
            <div className="container mx-auto">
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-60 before:-top-[2rem] lg:before:-left-[60%] md:before:-left-[80%] before:-left-[60%]'>What Other People Say</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quia quo ut amet quaerat nulla facilis fugit iste sed vel.</p>
                </div>
                {/* slider */}
                <div>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        pagination={{ clickable: true }}
                        autoplay={{ delay:7500, disableOnInteraction:false}}
                        className='mySwiper'
                    >
                        {testimonials.map((item, id) => {
                            const { authorImg, authorText, authorName, authorPosition } = item;
                            return (
                                <SwiperSlide key={id}>
                                    <div className='flex flex-col lg:flex-row gap-0 lg:gap-32 p-5 lg:p-0'>
                                        <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                                            <img src={authorImg} alt="" className='rounded-2xl' />
                                        </div>
                                        <div className='flex flex-col max-w-3xl mt-10'>
                                            <h5 className='font-body text-2xl mb-8 font-normal italic'>{authorText}</h5>
                                            <div>
                                                <p className='text-lg text-accent'>{authorName}</p>
                                                <p>{authorPosition}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
