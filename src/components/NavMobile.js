import React from "react";

// import icons

import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden w-full h-full bg-purple-900">
      <IoClose onClick={() => setNavMobile(false) } className="text-3xl absolute top-6 left-4 cursor-pointer" />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-lg">
          <a href="/">Home</a>
        </li>
        <li className="text-lg">
          <a href="/">Company</a>
        </li>
        <li className="text-lg">
          <a href="/contact">Features</a>
        </li>
        <li className="btn">
          <a href="/contact-us">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
