"use client"
import { LinearProgress } from "@mui/material";
import './Button.css';
import { useEffect, useRef, useState } from "react";
import LangugeSkill from "./LangugeSkill";
import useanimatedHooks from "@/components/hook/useanimatedHooks";
import { RiJavascriptFill } from "react-icons/ri";
const Skils = () => {

   useEffect(() => {
     useanimatedHooks();
   }, []);

    const [progress, setProgress] =useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef =useRef(() => {});
   useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });

    useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);



    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 animate__fadeInUp animate__animated wow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left space-y-4 mb-16 md:mb-0 items-center text-center">
            <span className="font-semibold text-sm text-[#FECACA] uppercase">
              expertise
            </span>
            <LinearProgress
              className="w-[120px] rounded-sm mt-1 "
              color="success"
            />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#03A84E] ">
              My Skills & Tools
            </h1>
            <h5 className="font-semibold text-md text-gray-100">
              Every day is a new challenge
            </h5>
            <p className="mb-8 leading-relaxed text-gray-400">
              I have expertise in making static websites, landing pages,
              full-stack web apps, and deployment. My expertise includes
              JavaScript, ReactJs, NextJs, NodeJS, bootstrap, Tailwind
              css,Material Ui, Express js, MongoDB, JWT & Firebase. I specialize
              in providing high-quality services in frontend & backend
              development, Mern-stack projects, React js & next js applications,
              landing pages, and NFT websites.
            </p>
            <div className="flex justify-center">
              <div className="myButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="px-3">Hire Me</button>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg wow animate__fadeInUp animate__animated lg:w-full md:w-1/2 w-5/6 space-y-3">
            <div>
              <p className="text-lg text-gray-200">Git & Github</p>
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#03A84E",
                  },
                }}
                variant="buffer"
                value={80}
                valueBuffer={buffer}
              />
            </div>
            <div>
              <p className="text-lg text-gray-200">Visual Studio Code</p>
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#03A84E",
                  },
                }}
                variant="buffer"
                value={90}
                valueBuffer={buffer}
              />
            </div>
            <div>
              <p className="text-lg text-gray-200">Figma</p>
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#03A84E",
                  },
                }}
                variant="buffer"
                value={90}
                valueBuffer={buffer}
              />
            </div>
            <div>
              <p className="text-lg text-gray-200">Adobe Photoshop</p>
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#03A84E",
                  },
                }}
                variant="buffer"
                value={80}
                valueBuffer={buffer}
              />
            </div>
            <div>
              <p className="text-lg text-gray-200">
                Master Of React Awesome Components{" "}
              </p>
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#03A84E",
                  },
                }}
                variant="buffer"
                value={90}
                valueBuffer={buffer}
              />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-5 items-center justify-center py-5 gap-3 ">
              <div className="text-center">
                
                  <LangugeSkill color="red"></LangugeSkill>
                  <h5 className="text-md text-gray-200">JavaScript</h5>
                
              </div>
              <div>
                <LangugeSkill color="red"></LangugeSkill>
                <h5 className="text-md text-gray-200">React Js</h5>
              </div>

              <div>
                <LangugeSkill color="red"></LangugeSkill>
                <h5 className="text-md text-gray-200">Material Ui</h5>
              </div>

              <div>
                <LangugeSkill color="red"></LangugeSkill>
                <h5 className="text-md text-gray-200">Tailwind css</h5>
              </div>
              <div>
                <LangugeSkill color="red"></LangugeSkill>
                <h5 className="text-md text-gray-200">Next JS</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Skils;