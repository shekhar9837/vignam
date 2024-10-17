'use client'


import AllSolution from "@/components/AllSolution";
import ClickToCreate from "@/components/ClickToCreate";
import Engage from "@/components/Engage";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStartInFree from "@/components/GetStartInFree";
import GrowYourAudience from "@/components/GrowYourAudience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OptimizedAll from "@/components/OptimizedAll";
import ShareVoiceSection from "@/components/ShareVoiceSection";
import WorkingSection from "@/components/WorkingSection";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";




export default function Home() {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && scrollRef.current) {
      // Initialize LocomotiveScroll on the client side
      locomotiveScroll.current = new LocomotiveScroll({
        // @ts-expect-error dont know error message
      el: scrollRef.current as HTMLElement,
        smooth: true,
      });

      return () => {
        // Clean up LocomotiveScroll instance when the component unmounts
        locomotiveScroll.current?.destroy();
      };
    }
  }, []);

  
  return (
    <div  
    ref={scrollRef}
>
  <Navbar/>
    <HeroSection/>
    <ShareVoiceSection/>
    <WorkingSection/>
    <OptimizedAll/>
    <GetStartInFree/>
    <Features/>
    <AllSolution/>
    <GrowYourAudience/>
    <Engage/>
    <FAQ/>
    {/* <div
     data-scroll
      data-scroll-speed="0.5"
      className="z-90"
    > */}
    <ClickToCreate/>

    {/* </div> */}
    <Footer/>
    </div>
  );
}
