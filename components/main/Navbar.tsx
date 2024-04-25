"use client";
import Image from "next/image";
import router from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  //handle the burger menu click
  const handleBurgerMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const [activeTab, setActiveTab] = useState("#about-me");
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    setShowMenu(false);
  };
 
  return (
    <div className="w-full items-center justify-between px-4 py-4 h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50  ">
      <div className="flex justify-between items-center flex-row">
        <div className="md:hidden  text-white text-xl">ARULKUMARAN</div>
        <button
          className="text-3xl md:hidden bg-blue-800 cursor-pointer"
          onClick={handleBurgerMenuClick}
        >
          {/* hamburger menu unix code*/}
          &#9776;
        </button>
      </div>

      {showMenu && (
        <div className="md:hidden  z-40">
          <ul className="fixed flex flex-col  h-auto font-bold text-white bg-[black] w-full">
            <a
              href="#about-me"
              className={`px-4 py-2 cursor-pointer inline-block transition-colors ease-in duration-100 hover:border-[#1d133d61] hover:text-green-500 ${
                activeTab === "#about-me"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#about-me")}
            >
              About me
            </a>
            <a
              href="#career"
              className={`px-4 py-2 cursor-pointer inline-block  transition-colors duration-300 hover:border-[#1d133d61]  hover:text-green-500  ${
                activeTab === "#career"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#career")}
            >
              Experience
            </a>
            <a
              href="#skills"
              className={`px-4 py-2 cursor-pointer inline-block  transition-colors duration-300 hover:border-[#1d133d61]  hover:text-green-500  ${
                activeTab === "#skills"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`px-4 py-2 cursor-pointer inline-block  transition-colors duration-300 hover:border-[#1d133d61]  hover:text-green-500  ${
                activeTab === "#projects"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#projects")}
            >
              Projects
            </a>
          </ul>
        </div>
      )}
      <div className="w-full  hidden h-full md:flex flex-row items-center justify-center m-auto px-[10px]">
        {/* <a
          href="# about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Arulkumaran
          </span>
        </a> */}

        <div className="w-[500px] h-full  hidden md:flex flex-row items-center justify-between ">
          <div className="flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e]  rounded-full text-gray-200">
            <a
              href="#about-me"
              className={`px-4 py-2 cursor-pointer inline-block rounded-full transition-colors duration-300 hover:border-[#1d133d61] hover:bg-[#7042f861] hover:rounded-full ${
                activeTab === "#about-me"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#about-me")}
            >
              About me
            </a>
            <a
              href="#career"
              className={`px-4 py-2 cursor-pointer inline-block rounded-full transition-colors duration-300 hover:border-[#1d133d61] hover:bg-[#7042f861] hover:rounded-full ${
                activeTab === "#career"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#career")}
            >
              Experience
            </a>
            <a
              href="#skills"
              className={`px-4 py-2 cursor-pointer inline-block rounded-full transition-colors duration-300 hover:border-[#1d133d61] hover:bg-[#7042f861] hover:rounded-full ${
                activeTab === "#skills"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`px-4 py-2 cursor-pointer inline-block rounded-full transition-colors duration-300 hover:border-[#1d133d61] hover:bg-[#7042f861] hover:rounded-full ${
                activeTab === "#projects"
                  ? "bg-[#7042f861] border-[#1d133d61]"
                  : ""
              }`}
              onClick={() => handleTabClick("#projects")}
            >
              Projects
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
