"use client"
import ParticalesBackground from "@/components/Particalse/ParticalesBackground";
import Banner from "@/components/Ui/Banner/Banner";
import Contact from "@/components/Ui/Contact/Contact";
import EduCation from "@/components/Ui/Education/EduCation";
import Footer from "@/components/Ui/Footer/Footer";
import Service from "@/components/Ui/Service/Service";
import Skils from "@/components/Ui/Skills/Skils";

export default function Home() {
  return (
    <div>
      <ParticalesBackground></ParticalesBackground>
      <Banner></Banner>
      <Service></Service>
      <Skils></Skils>
      <EduCation></EduCation>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
