
"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bannerimg from "@/assets/bannerimg.gif";
import './Banner.css';
import { GoDownload } from "react-icons/go";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Creative Web Developer",
  "Front-End Developer",
  "Fully Responsive Fesign",
  "User Friendly Website Desgin And Development",
];

const Banner = () => {

     const [index, setIndex] = useState(0);

     useEffect(() => {
       const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 
       );
       return () => clearTimeout(intervalId);
     }, []);



    return (
      <div className="py-20 ">
        
        <div className=" font-poppins">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
              <span className="inline-block mb-4 text-sm font-semibold leading-none text-[#FECACA] capitalize">
                HI THERE , MY NAME IS
              </span>
              <h2 className="mb-2 text-3xl font-semibold leading-tight tracking-tight text-gray-300  md:text-5xl lg:text-6xl">
                Romjan Hossain
              </h2>

              <h1 className="text-[#03A84E] mb-3 text-lg">
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h1>

              <p className="mb-6 font-medium tracking-wide text-gray-400  md:text-lg">
                As a front-end developer, I bring websites to life with clean
                code, responsive design, and a keen eye for detail. create
                user-friendly interfaces.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-[#03a84d80] rounded-md shadow  hover:bg-[#03a84dc7] transition-all"
              >
                Download CV
                <GoDownload className="ms-2 text-lg" />
              </a>
            </div>
            <div className="w-full px-4 md:w-[46%] lg:w-[]">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <div className="relative box overflow-hidden rounded-7xl">
                  <Image
                    width={200}
                    height={200}
                    src={bannerimg}
                    alt=""
                    className="relative z-10 object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;