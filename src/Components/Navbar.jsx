import React, { useState } from "react";

import Button from "../Layout/Button";
import logoyummy from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
 import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu]=useState(false);
  const handleChange =()=>{
    setMenu(!menu);
  };
  
  return (
    <div className="fixed w-full ">
      <div className="">
        <div className="flex flex-row justify-between p-2 l  max-lg:px-[24px] px-12 bg-white shadow-[0_3px_10px_rgba(0,0,0,2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={logoyummy} className="w-12" alt="" />
            <h1 className="text-xl font-semibold pl-1">Yummy Bite</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center gap-8 text-lg font-medium">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor cursor-pointer"
            >
              Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="Verities"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-brightColor cursor-pointer"
                >
                  Verities
                </Link>
                <BiChevronDown size={25} className="cursor-pointer" />
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border-gray-300 p-5 rounded-lg ">
                <li >
                  <Link
                    to="Spicy"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor cursor-pointer"
                  >
                    Spicy
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="Mecsican"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor cursor-pointer"
                  >
                    Mecsican
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="Peri Peri"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor cursor-pointer"
                  >
                    Peri Peri
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="Grill"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor cursor-pointer"
                  >
                    Grill
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="Reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Reviews
            </Link>
            <Link to='/Signin'><Button title="Log in" /></Link>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer"/>
            ) : (
              <IoMenu size={25} onClick={handleChange}  className="cursor-pointer"/>
            )}
          </div>
        </div>
        <div className ={` ${menu ? "translate-x-0": "translate-x-full"} lg:hidden flex flex-col bg-black text-white text-2xl font-semibold text-center  pt-8 pb-4 h-fit transition-transform duration-300 gap-5 left-0 top-20 ` }>
        <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor cursor-pointer"
            >
              Home
            </Link>
            <Link
                  to="Verities"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-brightColor cursor-pointer"
                >
                  Verities
                </Link>
                <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="Reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer"
            >
              Reviews
            </Link>
            <Button title="Log in" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
