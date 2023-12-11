"use client"

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "animate.css";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuLinks = (
      <>
        <li>
          <Link
            className=" relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className="relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/about"}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            className="relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/services"}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            className=" relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/project"}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            className=" relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/blogs"}
          >
            BLOGS
          </Link>
        </li>
        <li>
          <Link
            className=" relative after:bg-[#03A84E] after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            href={"/contact"}
          >
            CONTACT US
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/RomjanHossainn"}>
            <FaGithub className="text-[25px] hover:text-[#03A84E] transition-all duration-150" />
          </Link>
        </li>
      </>
    );

    return (
      <section className="font-poppins">
        <div className="max-w-6xl px-4 mx-auto" x-data="{open:false}">
          <nav className="flex items-center justify-between py-3">
            <a
              href=""
              className="text-3xl font-semibold leading-none text-gray-200 dark:text-gray-300 animate__animated animate__fadeInLeft"
            >
              Logo
            </a>
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-blue-200 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-300 hover:border-blue-300 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden text-gray-300/80 font-medium text-sm  lg:w-auto lg:space-x-12 lg:items-end lg:flex animate__animated animate__fadeInRight ">
              {menuLinks}
            </ul>
          </nav>
          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          ></div>
          <div
            className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md bg-[#262626] w-80 lg:hidden lg:transform-none lg:relative ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          >
            <div className="flex justify-between px-5 py-2">
              <a className="text-2xl font-bold dark:text-gray-400" href="#">
                Logo
              </a>
              <button
                className="rounded-md hover:text-[#03A84E] lg:hidden dark:text-gray-400"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <ul className="px-5 text-left text-sm text-gray-400 space-y-3 mt-7">
              {menuLinks}
            </ul>
            <div className="flex items-center mt-5 lg:hidden">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block w-full px-4 py-3 mr-2 text-xs font-medium leading-none text-center text-gray-100 bg-[#03a84d83] rounded-full hover:text-white    hover:bg-[#03A84E] transition-all "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Navbar;