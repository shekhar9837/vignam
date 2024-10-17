'use client';

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useRef } from "react";
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import LocomotiveScroll styles

const ClickToCreate: React.FC = () => {
  // const scrollRef = useRef<HTMLDivElement | null>(null);
  // const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && scrollRef.current) {
  //     // Initialize LocomotiveScroll on the client side
  //     locomotiveScroll.current = new LocomotiveScroll({
  //       el: scrollRef.current as HTMLElement,
  //       smooth: true,
  //     });

  //     return () => {
  //       // Clean up LocomotiveScroll instance when the component unmounts
  //       locomotiveScroll.current?.destroy();
  //     };
  //   }
  // }, []);

  return (
    <section
      // ref={scrollRef}
      // data-scroll-container
     
      className="relative  z-10 w-full overflow-hidden rounded-[64px] bg-neutral-950 drop-shadow-2xl"
    >
      <div 
      //  data-scroll
      // data-scroll-speed="0.2" 
      >

      
      <div className="mt-12 flex flex-col items-center md:mt-28" >
        <h3 className="mb-4 text-3xl font-[750] tracking-[-0.2px] text-white md:mb-6 md:text-[60px] md:font-[850] md:leading-[54px] md:tracking-[-1px]">
          One-Click to Create
        </h3>
        <p className="mb-2 max-w-md text-balance text-center text-md font-normal leading-relaxed text-neutral-400 md:max-w-2xl md:text-lg">
          Postable is built with simplicity and fun at its core. No design skills? No problem. We handle the heavy lifting so you can effortlessly create stunning posts.
        </p>
        <Link
          className="relative my-8 inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
          href="#input"
        >
          Get Started for FREE{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right size-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <Image
          src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp"
          alt="Last Section"
          width={1920}
          height={1080}
        />
      </div>
      </div>
    </section>
  );
};

export default ClickToCreate;
