"use client"
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-3.75 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center gap-2 justify-around flex-wrap">
                

                {/* <div className="min-w-50 h-auto flex flex-col items-center justify-start"> */}
                    {/* <div className="font-bold text-[16px]">Community</div> */}
                    {/* <p className="flex flex-row items-center my-3.75 cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-1.5">Youtube</span>    
                    </p> */}
                    
                {/* </div> */}
                <div className="min-w-50 h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    {/* <p className="flex flex-row items-center my-3.75 cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-1.5">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-3.75 cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-1.5">Twitter</span>    
                    </p> */}
                    <a href="https://github.com/Monishka0709" target="_blank" className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-1.5">Github</span>    
                    </a>
                    <a href="https://discord.com/maryjane_98" target="_blank" className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-1.5">Discord</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/monishka-rajput" target="_blank" className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-1.5">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-50 h-auto flex flex-col items-center justify-start">
                    <a href="#education" className="font-bold text-[16px]">About</a>
                   <p className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                     
                        <span className="text-[15px] ml-1.5">My Projects</span>    
                    </p>
                    <p className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                      
                        <a href="#about" className="text-[15px] ml-1.5">Learning about me</a>    
                    </p>
                    <p className="flex flex-row items-center my-3.75 cursor-pointer z-20">
                  
                        <span onClick={() => window.location.href = 'mailto:monishka0709@gmail.com'} className="text-[15px] ml-1.5">monishka0709@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-5 text-[15px] text-center">
                &copy; Monishka Rajput {new Date().getFullYear()} All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer