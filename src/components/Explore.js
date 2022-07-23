import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className='container mx-auto h-full'>
        <div className='bg-explore h-full p-14 bg-no-repeat bg-cover flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-semibold mb-8' data-aos="fade-right" data-aos-offset="1000" >Explore Product In New Way</h3>
          <p className='max-w-xs mb-12' data-aos="fade-right" data-aos-offset="1100" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae, ipsum unde ratione voluptatem saepe harum accusantium nulla nisi cupiditate quaerat cumque impedit provident, quasi maiores cum temporibus iusto dolorem!</p>

          {/* form */}

          <form className='flex flex-col space-y-4 w-full gap-x-4 lg:flex-row lg:space-y-0' data-aos="fade-up" data-aos-offset="200" >
            <input className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none' type="text" placeholder='Your E-mail' />
            <button className='btn'>Start</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Explore;
