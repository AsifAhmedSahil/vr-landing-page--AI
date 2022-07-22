import React from 'react';

// import componenets
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

// import icons
import {HiMenu} from "react-icons/hi";

const Header = ({setNavMobile}) => {
  return <header className='py-6'>
    <div className='container mx-auto'>

      <div className='flex items-center justify-between'>
        <a href="/">
          <img className='h-[30px]' src={Logo} alt="/" />
        </a>
        {/* nav */}
        <Nav/>
        {/* mobile btn */}
        <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-3xl text-white cursor-pointer'/>
      </div>

    </div>
  </header>;
};

export default Header;
