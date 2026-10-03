"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  floatingAnimation,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-4 md:px-20 mt-15 w-full z-20 sm:mt-40"
    >
      <div className="h-full w-full flex flex-col gap-2 md:gap-5 justify-center m-auto text-start align-center sm:align-left">
        <motion.div
          variants={slideInFromTop}
          className="isolate overflow-hidden items-center relative backdrop-blur-[6px] rounded-[32px] shadow-[inset_0_-7px_11px_#a48fff1f] w-max transition-[box-shadow] duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] py-2 px-1.75 border border-[#7042f88b] opacity-[0.9] hidden sm:flex"
        >
          <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">
            Welcome to my Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="flex-row items-center justify-center sm:hidden">
          <motion.div
            variants={floatingAnimation}
            initial="startpos"
            animate="endpos"
            className="flex align-middle justify-center"
          >
            <Image src={"/phone_girl2.png"}
              height={200}
              width={200}
              alt="afasdfa" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-0 text-6xl font-bold text-white max-w-150 w-auto h-auto sm:mt-6 text-center sm:text-start"
        >
          <span className="text-4xl sm:text-6xl">
            Hey, I&apos;m
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              {" "}
              Monishka{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg text-gray-400 my-5 max-w-150 text-center sm:text-start"
        >
          I&apos;m a JavaScript Developer with experience in Website development.
          Check out my projects and skills.
        </motion.p>
        <div className="flex justify-center sm:justify-start">
          <motion.a
            href="/MonishkaResumeAug.pdf"
            download="MonishkaResumeAug.pdf"
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-fit"
          >
            Download CV!
          </motion.a>
        </div>
      </div>


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full  justify-center items-center hidden sm:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}

        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
