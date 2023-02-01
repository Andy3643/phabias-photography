import React from 'react'
import { useState } from 'react'
import SectionHead from '../../components/SectionHead'
import {FaQuoteLeft} from 'react-icons/fa'
import Card from '../../components/Card'
import { testimonials } from '../../data'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import './testimonials.css'

const Testimonials = () => {
     const [index,setIndex] = useState(0)
     const {name,quote,job,avatar} = testimonials[index]

     const prevTestimonialHandler = () =>{
        setIndex(prev => prev -1);

        if (index <= 0){
            setIndex(testimonials.length -1)
        }
     }

     const nextTestimonialHandler = () =>{
        setIndex(prev => prev+1);

        if (index >= testimonials.length - 1){
            setIndex(0)
        }
     }

  return (
    <section className='testimonials-phone'>
      <div className="heading-testimonials">
          <span><FaQuoteLeft/></span>
            <h2>Testimonials</h2>
            <p>Here is what my clients say</p>
      </div>
      <div  className="testimonials">
        <div className="container testimonials__container">
            <Card className='testimonial'>
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonial__btn-container">
                <button className='testimonials__btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                <button className='testimonials__btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimonials