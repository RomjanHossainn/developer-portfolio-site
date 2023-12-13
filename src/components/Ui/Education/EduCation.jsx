"use client"
import './Education.css'
const EduCation = () => {
    return (
      <section className="lg:flex gap-8">
        <div className="flex-1 ">
          <div className="">
            <h2 className=" mb-3 font-semibold text-[#FECACA] ">EDUCATION</h2>
            <div className="">
              <div className="w-full card h-[250px] mb-6 border border-[#373737] rounded-md">
                <div className="rounded-b  p-6 shadow">
                  <a
                    href="#"
                    className="px-4 py-1 text-sm text-white rounded-full   bg-[#03a84d41]"
                  >
                    Education
                  </a>
                  <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                    Junior School Certificate (JSC)
                  </h2>
                  <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                    I have successfully passed the JSC, marking the completion
                    of my junior secondary education. Excited to embark on the
                    next phase of my academic journey. Ready for new challenges!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full card1 h-[250px] border border-[#373737] rounded-md mb-6 lg:px-2">
              <div className="p-6 rounded-b shadow ">
                <a
                  href="#"
                  className="px-4 py-1 text-sm rounded-full bg-[#03a84d41] text-white"
                >
                  Education
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Secondary School Certificate (SSC)
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  I have achieved success in the SSC, completing my secondary
                  education. Eager for new opportunities and ready to embark on
                  the next chapter of my academic or professional journey
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[250px] card border border-[#373737] rounded-md  mb-6 lg:px-2">
              <div className="p-6  rounded-b shadow ">
                <a
                  href="#"
                  className="px-4 py-1 text-sm rounded-full bg-[#03a84d41] text-white"
                >
                  Education
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Higher Secondary Certificate (HSC)
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  I have successfully completed the HSC, marking the end of my
                  higher secondary education. Excited for the next steps in my
                  academic journey or potential career endeavors
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div>
            <h2 className="font-semibold mb-3 text-[#FECACA]">EXPERIENCE</h2>
            <div className="w-full card1  h-[250px] border border-[#373737] rounded-md mb-6 lg:px-2">
              <div className="p-6  rounded-b shadow ">
                <a
                  href="#"
                  className="px-4 py-1 text-sm rounded-full bg-[#03a84d41] text-white"
                >
                  experience
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Frontend Developer
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  As a front-end developer, I bring websites to life with clean
                  code, responsive design, and a keen eye for detail. create
                  user-friendly interfaces.
                </p>
              </div>
            </div>
            <div className="w-full card h-[250px] border border-[#373737] rounded-md mb-6 lg:px-2">
              <div className="p-6  rounded-b shadow ">
                <a
                  href="#"
                  className="px-4 py-1 text-sm rounded-full bg-[#03a84d41] text-white"
                >
                  experience
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Fully Responsive Designer
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  Ensuring mobile compatibility, creating adaptive designs to
                  provide a consistent and enjoyable experience across devices
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] border border-[#373737] rounded-md mb-6 lg:px-2">
              <div className="p-6  rounded-b shadow ">
                <a
                  href="#"
                  className="px-4 py-1 text-sm rounded-full bg-[#03a84d41] text-white"
                >
                  experience
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  dynamic & interactive development
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  I specialize in dynamic and interactive development, crafting
                  engaging digital experiences. I am passionate about coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default EduCation;