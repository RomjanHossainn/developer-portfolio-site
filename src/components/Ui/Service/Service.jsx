"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GrPerformance } from "react-icons/gr";
import { MdAnimation } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
import { LinearProgress } from "@mui/material";
const Service = () => {
  return (
    <section className="py-10">
      <div className="text-center py-8">
        <span className="text-gray-200 text-2xl">Services</span>
        <LinearProgress
          className="w-[120px] rounded-sm mt-1 mx-auto"
          color="success"
        />
        <p className="text-gray-400 mt-3">
          Enhancing websites with React, I create smooth, responsive interfaces{" "}
          <br />
          for a seamless user experience
        </p>
      </div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#03A84E",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          " --swiper-pagination-bottom": "10px",
        }}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ height: "255px" }}
          className="text-white border h-0 space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <IoCodeSlashSharp className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">Web Development</h2>
          <p className="text-gray-400">
            Build easy-to-use websites with React.js or Next.js. Make
            components, manage states, and navigate seamlessly for a friendly
            user experience.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "260px" }}
          className="text-white border h-0 space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <GrPerformance className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">Performance Optimization</h2>
          <p className="text-gray-400">
            Improve website performance by optimizing code and implementing lazy
            loading techniques. Rigorous testing and debugging processes
            guarantee a seamless user experience.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "260px" }}
          className="text-white border h-0 space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <MdAnimation className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">Animation and Interactivity</h2>
          <p className="text-gray-400">
            Add charm to your website with subtle animations and interactivity
            using React.js or Next.js. Engage users effortlessly, enhancing the
            overall user experience and making your site more appealing.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "260px" }}
          className="text-white border h-[300px] space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <MdAddShoppingCart className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">E-commerce Integration</h2>
          <p className="text-gray-400">
            Integration of e-commerce solutions into existing websites. Building
            custom shopping cart and checkout functionalities. Animation and
            Interactivity:
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "260px" }}
          className="text-white border h-[300px] space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <FaMobileScreen className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">Mobile Responsiveness</h2>
          <p className="text-gray-400">
            Description: Ensuring mobile compatibility, creating adaptive
            designs to provide a consistent and enjoyable experience across
            devices
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "260px" }}
          className="text-white border h-[300px] space-y-3 border-[#333] px-5 p-5 pb-12 rounded-md"
        >
          <GrVmMaintenance className="text-[#068721] text-2xl" />
          <h2 className="text-2xl">Maintenance and Support</h2>
          <p className="text-gray-400">
            Offering ongoing maintenance services for websites and applications.
            Providing support for bug fixes and updates. Solve any kind of
            problem on the website
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Service;
