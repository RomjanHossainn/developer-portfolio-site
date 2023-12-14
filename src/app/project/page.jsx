"use client"

// import required modules

import Image from 'next/image';
import { GrProjects } from "react-icons/gr";
import productHome from '@/assets/producthome.png'
import productdetils from "@/assets/productdetils.png";
import productlogin from "@/assets/productlogin.png";
import productorder from "@/assets/productorder.png";
import productregister from "@/assets/productregister.png";
import surveyhome from "@/assets/surveyhome.png";
import surveydesboard from "@/assets/surveydesboard.png";
import jobshome from "@/assets/jobshome.png";
import bidproject from "@/assets/bidproject.png";
import bidreq from "@/assets/bidreq.png";
import mybids from "@/assets/mybids.png";
import mypostedjob from "@/assets/mypostedjob.png";
import Footer from "@/components/Ui/Footer/Footer";
import ParticalesBackground from '@/components/Particalse/ParticalesBackground';

const page = () => {
  
    return (
      <div className="">
        <ParticalesBackground></ParticalesBackground>
        <div className="py-16">
          <section className="border border-[#444444] rounded-md">
            <div className="container px-6 py-10 mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-300 capitalize lg:text-3xl ">
                  recent 3 Projects{" "}
                </h1>

                <GrProjects className="text-[#03A84E]" />
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {/* Repeat this block for each post */}
                <div className="animate__fadeInUp animate__animated">
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productHome}
                    alt=""
                  />

                  <div className="mt-8">
                    <span className="text-blue-500 uppercase">
                      Clothing Brand
                    </span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                      Full project and description is given below
                    </h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      It is basically an eCommerce application *User can add
                      their various products here May update or delete their
                      products *Here are some products of different brands He
                      can upload his products according to this brand *If a user
                      wants to do all these tasks However, he must be logged in
                      to our website
                    </p>
                    <br />
                    <p className="text-gray-400">
                      user can get anything from here , to get our product user
                      should create account on our website after user login our
                      website they access off all server from our website user
                      can add producat and update all kind of product user could
                      delete there product from my cart route
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <a
                        href="https://github.com/RomjanHossainn/brand-shop-frontend-public"
                        className="inline-block text-[#F2C1C1] underline hover:text-blue-400"
                      >
                        Get The Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="animate__fadeInUp animate__animated">
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={surveyhome}
                    alt=""
                  />

                  <div className="mt-8">
                    <span className="text-blue-500 uppercase">
                      survey webiste
                    </span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                      Full project and description is given below
                    </h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      *It is basically a polling and survey application
                      *Different users can come here and create their own
                      surveys. Their surveys reach all other users *However, to
                      create a survey here, he must be a valid user logged in to
                      our website *If users want they can login or register with
                      their email password and also there is Google signin and
                      other system. *Other users can come and participate in the
                      survey of those who create the survey. Users can express
                      their opinion. .Users can like and dislike surveys. They
                      can also vote in the survey if they want
                    </p>

                    <br />
                    <p className="text-gray-400">
                      Admin will have all kinds of powers. The admin can delete
                      the surveys of those who have created the survey. He can
                      change the role of different users if he wants. All kinds
                      of admin in one place will have access prouser role --
                      *Here there is a role of pro user who can comment on the
                      survey. Which no normal user or surveyor can do surveyor
                      role--- *There is a role of surveyor who can upload survey
                      Can delete their survey. They can also change the users
                      role. They can update their survey. And admins feedback
                      gets ====The application has several other features
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <a
                        href="https://github.com/RomjanHossainn/polling-and-survey-application"
                        className="inline-block text-[#FECACA] underline hover:text-blue-400"
                      >
                        Get the Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="animate__fadeInUp animate__animated">
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={jobshome}
                    alt=""
                  />

                  <div className="mt-8">
                    <span className="text-blue-500 uppercase">Jobs Site</span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                      Full project and description is given below
                    </h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      user can get anything from here post jobs bids jobs user
                      should create account on our website user can add jobs and
                      update , delete all kind of jobs user could delete there
                      jobs bids from my bids route Users can post jobs according
                      to category if they want,Users can bid on jobs if they
                      want,google login syestem,and email and password
                    </p>
                    <br />
                    <p className="text-gray-400">
                      website full description <br /> point === *This website is
                      a jobs site. Where users can post their jobs They are very
                      nicely displayed on the website Those who want to work can
                      do this job can apply And apply and go directly to the job
                      that posted it. He can approve if he thinks. If the person
                      who posted the job wants to delete his job can do Can
                      update his jobs. There are some other features in the
                      website
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <a
                        href="https://github.com/RomjanHossainn/job-hunt-public-frontend"
                        className="inline-block text-[#F2C1C1] underline hover:text-blue-400"
                      >
                        Get the Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* End of post block */}
              </div>
            </div>
          </section>
          <section className="border mt-12 border-[#444444] rounded-md">
            <div className="container px-6 py-10 mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-300 capitalize lg:text-3xl ">
                  Others Section{" "}
                </h1>
                <GrProjects className="text-[#03A84E]" />
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div className="grid grid-cols-1  gap-8 md:grid-cols-2 xl:grid-cols-3">
                {/* Repeat this block for each post */}
                <div className="">
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productdetils}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productlogin}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productorder}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productregister}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={productregister}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={surveydesboard}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={mybids}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={bidreq}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={bidproject}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height="{800}"
                    width="{800}"
                    className="object-cover object-center w-full  rounded-lg "
                    src={mypostedjob}
                    alt=""
                  />
                </div>
                {/* End of post block */}
              </div>
            </div>
          </section>

          <Footer></Footer>
        </div>
      </div>
    );
};

export default page;