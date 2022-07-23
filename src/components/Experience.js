import React from "react";

// import images
import img1 from "../assets/img/exp-img1.png";
import img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col min-w-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex  space-x-6 items-center lg:space-x-12">
            <div className="self-start" data-aos="fade-down" data-aos-offset="400">
              <img src={img1} alt="/" />
            </div>
            <div className="self-end mt-24 " data-aos="fade-up" data-aos-offset="400">
              <img src={img2} alt="/" />
            </div>
          </div>
          {/* text */}
            <div className="flex-1 flex flex-col justify-center items-start mt-6 lg:mt-24 " data-aos="fade-left" data-aos-offset="400">
                <h2 className="text-3xl mb-6 font-bold">New Wxperience In Playing Games</h2>
                <p className="font-secondary mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, veniam maiores. Nobis aspernatur, repellat id libero quod, aut voluptatem sit, suscipit explicabo tenetur doloribus sequi porro asperiores assumenda saepe. Voluptatem?</p>
                <button className="btn">Get It Now</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
