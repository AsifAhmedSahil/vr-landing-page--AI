import React from 'react';

// import components 
import TestimonialSlider from "./TestimonialSlider"

const Testimonial = () => {
  return <section className='mb-64 lg:mb-48'>
      <div className="container mx-auto">
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'>
            <h2 className='font-bold text-3xl mb-6' data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600">What Our Client Say</h2>
            <p className='max-w-2xl mx-auto mb-12 lg:mb-24' data-aos="fade-up" data-aos-offset="300" data-aos-delay="1800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates nemo obcaecati tenetur suscipit ipsam omnis expedita, assumenda odit ipsum numquam enim quasi aliquam repudiandae excepturi nam sit natus sequi?</p>
          </div>
          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
              <TestimonialSlider/>
            </div>
        </div>
      </div>
  </section>;
};

export default Testimonial;
