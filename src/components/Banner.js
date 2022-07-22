import React from 'react';

import Users from '../components/Users';

import img from '../assets/img/banner-img.png';

const Banner = () => {
  return (
  <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto'>
        <div className='flex  flex-col lg:flex-row'>
          {/* text */}
            <div>
              <h1 className='text-3xl font-bold mb-0 lg:text-5xl lg:leading-snug'>
                  Let's Explore <br /> Three-Dimensional Visually
              </h1>

              <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam magnam autem ut, optio aperiam molestias non temporibus, velit itaque numquam, totam repudiandae? Ducimus, explicabo corrupti quidem vitae odio tempore adipisci voluptate sit dicta! Repellendus ipsa unde quae nesciunt vero?</p>
                {/* btn */}
              <div className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'>
                <button className='btn'>Get It Now</button>
                <a href="/" className='border-b-2 border-transparent hover:border-white transition ease-out'>Explore Device</a>
              </div>

                <Users/>


            </div>
            {/* image */}
            <div>
              <img src={img} alt="" />
            </div>
        </div>
        

      </div>
  </section>
  );
};

export default Banner;
