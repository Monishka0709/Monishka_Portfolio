"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-[5px] sm:px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
        <div className="h-auto w-auto flex  items-center">
        <a href="#about-me" >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          </a>
          <a href="#about-me">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-sm sm:text-base md:text-lg">
            Monishka
          </span>
        </a>
      </div>
        {/* Desktop Links */}
        <div className="hidden sm:flex w-[500px] h-full flex-row items-center justify-between sm:w-[400px]">
          <div className="flex items-center justify-between w-[230px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[5px] py-[10px] rounded-full text-gray-200 text-[12px] sm:text-[15px] sm:px-[20px] md:w-full">
            <a href="#about-me" className="cursor-pointer hover:text-[#b49bff]">About me</a>
            <a href="#skills" className="cursor-pointer hover:text-[#b49bff]">Skills</a>
            <a href="#projects" className="cursor-pointer hover:text-[#b49bff]">Projects</a>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex flex-row gap-3 sm:gap-5">
          <a href="/Monishka_web_developer.pdf" download="Monishka_web_developer.pdf">
            <div className="flex items-center justify-center bg-[#7042f8] border border-[#7042f861] w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-[#7042f861] cursor-pointer transition ease-in duration-200">
              <Image
                src="/download.png"
                alt="download resume"
                width={16}
                height={16}
                className="sm:w-[20px] sm:h-[20px] cursor-pointer hover:animate-slowspin"
              />
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-md border border-[#7042f861] text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-[#030014e0] border-t border-[#7042f861] text-gray-200 py-3">
          <a href="#about-me" className="py-2 hover:text-[#b49bff]" onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#skills" className="py-2 hover:text-[#b49bff]" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="py-2 hover:text-[#b49bff]" onClick={() => setMenuOpen(false)}>Projects</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
