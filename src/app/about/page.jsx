import Image from "next/image";
import './aboutcss.css'
import coder from '@/assets/coderpng.png'
import aboutimg from '@/assets/programer.jpg'
import bannerimg from "@/assets/bannerimg.gif";
import Footer from "@/components/Ui/Footer/Footer";
import TextAnimation from "@/components/Ui/TextAnimation/TextAnimation";
import ParticalesBackground from "@/components/Particalse/ParticalesBackground";

const page = () => {

    

    return (
      <>
        <ParticalesBackground></ParticalesBackground>
        <section className="md:flex items-center gap-5 mb-8 mt-8">
          <div className="flex-1 box">
            <Image
              width={200}
              height={200}
              src={bannerimg}
              alt=""
              className="relative z-10 object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="flex-1 mt-5 md:mt-0">
            <h1 className=" border px-4 py-2  rounded-3xl border-[#03a84dc7] w-max text-[#03a84dc7] mb-5">
              ABOUT ME
            </h1>
            <TextAnimation></TextAnimation>
            <p className="text-gray-400">
              I am Romjan, a passionate freelancer from Dhaka Bangladesh,
              bringing futuristic web development and design. My expertise is
              building next-level websites and web applications with full
              frontend design. Fully mobile responsive website. I create
              animations on the website. Create user friendly website. I make
              awesome website using react or next js, with more technologies,
              example javascript, react, next js, tailwind sys, material ui,
              bootstrap, firebase, jwt, mongodb, express js, node js
            </p>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
};

export default page;