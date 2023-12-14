
"use client"
import Image from 'next/image';
import React from 'react';

import blogs from '@/assets/blogs.png'

const page = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        {/* Header */}

        {/* Header ends here */}

        {/* Main */}
        <main className="mt-10 animate__animated animate__fadeInUp">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-300 leading-tight">
                Journey in Frontend Development: Crafting Digital Experiences
                with Code
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                Web application Developer
              </a>
            </div>
            <Image
              height=""
              src={blogs}
              width=""
              className="w-fullobject-cover lg:rounded"
              style={{ height: "28em" }}
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4  basis-3/5 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/5">
              <p className="pb-6 text-gray-400">
                In the world of frontend development, I embark on a creative
                journey, where every line of code contributes to the visual
                tapestry of websites. My work revolves around translating design
                concepts into interactive interfaces using HTML, CSS, and
                JavaScript.
              </p>
              <p className="pb-6 text-gray-400">
                As a frontend developer, my focus is on making websites visually
                appealing and user-friendly. I ensure that each webpage responds
                seamlessly to different devices and screen sizes. Its about
                creating a harmonious balance between aesthetics and
                functionality, where users can effortlessly navigate through the
                digital landscape.
              </p>
              <p className="pb-6 text-gray-400">
                One of the rewarding aspects of my role is witnessing the impact
                of my work on users. Its about transforming complex ideas into
                simple, easy-to-use interfaces. Each project teaches me
                something new, whether its about responsive design principles,
                accessibility standards, or optimizing performance.
              </p>
              <p className="pb-6 text-gray-400">
                In this ever-changing field, learning is a constant companion.
                Whether I am exploring the latest features in CSS or delving
                into component-based frameworks like React, staying updated is
                essential. Its not just about coding; its about crafting
                experiences and leaving a mark on the digital canvas.
              </p>
              <p className="pb-6 text-gray-400">
                Frontend development, for me, is more than just a job—its a
                passion. Its an art form where innovation meets practicality,
                and creativity breathes life into pixels. With each project, I
                contribute to the evolving narrative of the web, one simple line
                of code at a time.
              </p>

              {/* Other paragraphs go here */}
            </div>

            <div className=" mt-12 flex-1">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <Image
                    height=""
                    width=""
                    src=""
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-300 text-sm">
                      {" "}
                      Romjan Hossain{" "}
                    </p>
                    <p className="font-semibold text-[#12723D] text-xs">
                      {" "}
                      Frontend Developer{" "}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 py-3">
                  I am Romjan, a passionate freelancer from Dhaka Bangladesh,
                  bringing futuristic web development and design. My expertise
                  is building next-level websites and web applications with full
                  frontend design. Fully mobile responsive website. I create
                  animations on the website. Create user friendly website. I
                  make awesome website using react or next js, with more
                  technologies, example javascript, react, next js, tailwind
                  sys, material ui, bootstrap, firebase, jwt, mongodb, express
                  js, node js
                </p>
                <a
                  href="https://github.com/RomjanHossainn"
                  className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
                >
                  Follow
                  <i className="bx bx-user-plus ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </main>
        {/* Main ends here */}

        {/* Footer */}

        {/* Footer ends here */}
      </div>
    );
};

export default page;