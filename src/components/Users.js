import React from 'react';

// import images

import Avater1 from "../assets/img/avt1.png";
import Avater2 from "../assets/img/avt2.png";
import Avater3 from "../assets/img/avt3.png";
import Avater4 from "../assets/img/avt4.png";

// import icons

import { BsFillCircleFill} from "react-icons/bs"

const Users = () => {
  return <div className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flow-row lg:space-y-0 lg:justify-start' data-aos="fade-down" data-aos-delay="900">
    <div className='flex -space-x-2 '>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avater1} alt="" />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avater2} alt="" />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avater3} alt="" />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avater4} alt="" />
      </div>
    </div>

    <div className='flex  items-center font-secondary font-medium space-x-2 '>
      <BsFillCircleFill className='text-sm text-green-500 animate-pulse'/>
      <div>400k people online</div>
    </div>
  </div>;
};

export default Users;
