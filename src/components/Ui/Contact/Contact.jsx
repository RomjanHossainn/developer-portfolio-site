"use client"
import useanimatedHooks from "@/components/hook/useanimatedHooks";
import { useEffect } from "react";

const Contact = () => {
   useEffect(() => {
     useanimatedHooks();
   }, []);
    return (
      <section className="overflow-hidden" id="contact">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 animate__fadeInUp  animate__animated wow">
              <h1 className="text-2xl font-semibold text-gray-300 capitalize  lg:text-3xl">
                Contact us for <br /> more info
              </h1>

              <h5 className="text-gray-400 mt-5">
                Fill out the form to contact me. I will try to respond as <br />{" "}
                soon as possible
              </h5>

              <div className="mt-6 space-y-8 md:mt-8">
                {/* Address */}
                <p className="flex items-start -mx-2">
                  {/* SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#068721]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {/* Address text */}
                  <span className="mx-2  truncate w-72 text-gray-400">
                    Dhamrai Dhaka
                  </span>
                </p>

                {/* Phone */}
                <p className="flex items-start -mx-2">
                  {/* SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#068721]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {/* Phone number text */}
                  <span className="mx-2 truncate w-72 text-gray-400">
                    +01745395942
                  </span>
                </p>

                {/* Email */}
                <p className="flex items-start -mx-2">
                  {/* SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#068721] "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {/* Email text */}
                  <span className="mx-2  truncate w-72 text-gray-400">
                    romjanhossainn@gmail.com
                  </span>
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 ">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  {/* Social Media Icons */}
                  <a
                    className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="w-10 h-10 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Icon path */}
                    </svg>
                  </a>

                  {/* Repeat similar code for other social media icons */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 lg:w-1/2 lg:mx-6 animate__fadeInRight  animate__animated wow">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl lg:max-w-xl  ">
                <h1 className="text-lg font-medium text-gray-400">
                  What do you want to ask
                </h1>

                {/* Contact Form */}
                <form className="mt-6">
                  {/* Full Name */}
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-400 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="block w-full px-5 py-3 mt-2  placeholder-gray-400 border border-gray-700 rounded-md  bg-transparent  focus:outline text-white "
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-400 ">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Your Full Email"
                      className="block w-full px-5 py-3 mt-2  placeholder-gray-400  bg-transparent border border-gray-700 rounded-md  text-white  focus:outline "
                    />
                  </div>

                  {/* Message */}
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-400 ">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-gray-400 border  rounded-md md:h-48  bg-transparent outline-none  border-gray-700  "
                      placeholder="Message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#068722af] rounded-md focus:ring-opacity-50">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;